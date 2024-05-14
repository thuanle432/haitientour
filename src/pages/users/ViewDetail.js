import Header from "../../components/Header";
import NavPage from "../../components/NavPage";
import Footer from "../../components/Footer";
import "../../assets/styles/users/ViewDetail.css"
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../services/UserContext';

const ViewDetail = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { id_tour } = useParams();
    const [tourDetails, setTourDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false)
    const today = new Date().toISOString().slice(0, 10);
    const [isAvailable, setIsAvailable] = useState(true);
    const [dateSelected, setDateSelected] = useState('');

    const toggleForm = () => setShowForm(!showForm);

    useEffect(() => {
        const fetchTourDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3001/api/tours/detail/${id_tour}`);
                setTourDetails(response.data);
            } catch (err) {
                console.error('Failed to fetch tour details:', err);
                setError('Failed to load tour details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (id_tour) {
            fetchTourDetails();
        }
    }, [id_tour]);

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDateSelected(selectedDate);
        checkAvailability(selectedDate);
    };

    const checkAvailability = async (selectedDate) => {
        try {
            const formattedDate = selectedDate.split('T')[0];
            const response = await axios.get(`https://server-nodejs-api.onrender.com/api/users/checkquantity/${id_tour}/${formattedDate}`);
            setIsAvailable(response.data.isAvailable);
        } catch (error) {
            console.error('Failed to check availability:', error);
            setIsAvailable(false);
            alert('An error occurred while checking the date. Please try again.');
        }
    };

    const checkExistingBooking = async (userId) => {
        try {
            const response = await axios.get(`https://server-nodejs-api.onrender.com/api/users/checkexisting/${userId}`);
            return response.data.exists;
        } catch (error) {
            console.error('Failed to check existing bookings:', error);
            return false;
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!user || !user.id) {
            alert('Bạn phải đăng nhập để đặt phòng.');
            return;
        }

        const existingBooking = await checkExistingBooking(user.id);
        if (existingBooking) {
            alert('Bạn đã có tour đang hoạt động không thể đặt tiếp được.');
            return;
        }

        if (!isAvailable) {
            alert('Tour ngày đã đã hết, vui lòng đặt ngày.');
            return;
        }

        const people = parseInt(event.target.peopleInput.value, 10);
        if (people > tourDetails.person) {
            alert(`Vượt quá chỉ tiêu số lượng người ban đầu ${tourDetails.person}.`);
            return;
        }

        const formData = {
            name: event.target.nameInput.value,
            email: event.target.emailInput.value,
            phoneNumber: event.target.phoneInput.value,
            people,
            date: event.target.dateInput.value,
            status: 1
        };

        const dataToSend = {
            id_account: user.id,
            formData,
            tourId: id_tour,
            name_tour: tourDetails.name_tour,
            price: tourDetails.price,
            itinerary: tourDetails.itinerary,
            includes: tourDetails.includes,
            excludes: tourDetails.excludes
        };

        try {
            const response = await axios.post('http://localhost:3001/api/users/savebooking', dataToSend);
            console.log('Lưu thông tin thành công', response.data);
            alert('Đặt chỗ thành công');
            navigate(`/bookingprocess/${user.id}`);
        } catch (error) {
            console.error('Lỗi khi lưu thông tin:', error);
            alert('Lỗi khi lưu đặt chỗ. Vui lòng thử lại.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!tourDetails) return <p>No tour details available.</p>;

    return (
        <>
            <Header />
            <NavPage />
            <section className="container-xxl py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <img className="w-100" src={`http://localhost:3001/${tourDetails.image_tour}`} alt={tourDetails.name_tour} />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <h2 className="py-3">{tourDetails.name_tour}</h2>
                        <div className="mt-1 mb-1 spec-1 d-flex">
                            <FontAwesomeIcon className="icon-tour" icon={faUser} />
                            <span className="title-icon">{tourDetails.person} person</span>
                        </div>
                        <div className="mt-1 mb-1 spec-1 d-flex">
                            <FontAwesomeIcon className="icon-tour" icon={faClock} />
                            <span className="title-icon">{tourDetails.day} day</span>
                        </div>
                        <h3 className="py-3">{parseInt(tourDetails.price).toLocaleString('vi-VN').replace(/,/g, '.') } VND</h3>
                        <button className="btn btn-outline-danger" onClick={toggleForm}>Book now</button>
                        {showForm && (
                            <div>
                                <h2>Information Book</h2>
                                <form onSubmit={handleFormSubmit}>
                                    <div class="mb-3">
                                        <label for="nameInput" class="form-label">Full name</label>
                                        <input type="text" class="form-control" id="nameInput" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="emailInput" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="emailInput" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="phoneInput" class="form-label">Number phone</label>
                                        <input type="number" class="form-control" id="phoneInput" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="peopleInput" class="form-label">People</label>
                                        <input type="number" class="form-control" id="peopleInput" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dateInput" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="dateInput" min={today} value={dateSelected} onChange={handleDateChange} required />
                                        {!isAvailable && <p className="text-danger">Ngày này đã có người chọn vui lòng chọn ngày khác</p>}
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                    <button type="button" class="btn btn-secondary" onClick={toggleForm}>Close</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ViewDetail;
