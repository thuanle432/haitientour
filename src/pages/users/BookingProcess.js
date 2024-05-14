import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import NavPage from '../../components/NavPage';
import Footer from '../../components/Footer';
import { useUser } from '../../services/UserContext';

const BookingProcess = () => {
    const [activeTab, setActiveTab] = useState('itinerary');
    const [bookingDetails, setBookingDetails] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        const fetchBookingDetails = async () => {
            if (user && user.id) {  
                try {
                    const response = await axios.get(`https://server-nodejs-api.onrender.com/api/users/inforbooking/${user.id}`);
                    setBookingDetails(response.data || []);
                } catch (error) {
                    console.error('Failed to load bookings:', error);
                }
            }
        };

        fetchBookingDetails(); 
    }, [user]); 

    const confirmBooking = async (booking) => {
        try {
            const response = await axios.patch(`https://server-nodejs-api.onrender.com/api/users/updatebooking/${booking.id_account}`, {
                status: 2
            });
    
            if (response.status === 200) {
                console.log("Status updated to Đang xử lý (2) on server.");
                const updatedBookings = bookingDetails.map(b => 
                    b.id_account === booking.id_account ? {...b, status: 2} : b 
                );
                setBookingDetails(updatedBookings);
                setActiveTab('includes');
            }
        } catch (error) {
            console.error('Failed to confirm booking:', error);
        }
    };
     
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderBooking = (booking, index) => (
        <div key={index}>
            <h2>Name tour: {booking.name_tour}</h2>
            <p>Tên: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Số điện thoại: {booking.phone_number}</p>
            <p>Số người: {booking.people}</p>
            <p>Ngày: {new Date (booking.date).toLocaleDateString('vi-VN')}</p>
            <p>Giá: { parseInt(booking.price).toLocaleString('vi-VN').replace(/,/g, '.')} VND </p>
            <p>Lịch trình: {booking.itinerary}</p>
            <p>Bao gồm: {booking.includes}</p>
            <p>Không bao gồm: {booking.excludes}</p>
            {activeTab === 'itinerary' && <div className="btn btn-outline-danger py-2" onClick={() => confirmBooking(booking)}>Xác nhận</div>}
        </div>
    );

    return (
        <>
            <Header />
            <NavPage />
            <div className="tab-container py-5">
                <div className="tabs">
                    <button onClick={() => handleTabClick('itinerary')} className={`tab ${activeTab === 'itinerary' ? 'active' : ''}`}>Thông tin</button>
                    <button onClick={() => handleTabClick('includes')} className={`tab ${activeTab === 'includes' ? 'active' : ''}`}>Đang xử lý</button>
                    <button onClick={() => handleTabClick('excludes')} className={`tab ${activeTab === 'excludes' ? 'active' : ''}`}>Đặt thành công</button>
                </div>
                <div className="tab-content">
                    {activeTab === 'itinerary' && bookingDetails.filter(b => b.status === 1).map(renderBooking)}
                    {activeTab === 'includes' && bookingDetails.filter(b => b.status === 2).map(renderBooking)}
                    {activeTab === 'excludes' && bookingDetails.filter(b => b.status === 3).map(renderBooking)}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BookingProcess;
