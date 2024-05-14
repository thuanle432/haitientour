import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavAdmin from "./NavAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import "../../../assets/styles/admin/HeaderAdmin.css"

const Tour = () => {
    const [tours, setTours] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editingTour, setEditingTour] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://server-nodejs-api.onrender.com/api/tours/list');
                setTours(response.data);
            } catch (error) {
                console.error('Nạp dữ liệu thất bại: ', error);
            }
        };
        fetchData();
    }, []);

    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => setShowForm(false);

    const handleShowEditForm = (tour) => {
        setEditingTour(tour);
        setShowEditForm(true);
    };
    const handleCloseEditForm = () => setShowEditForm(false);

    const handleDelete = async (tourId) => {
        if (window.confirm("Bạn có chắc chắn muốn xoá tour này không?")) {
            try {
                const response = await axios.delete(`https://server-nodejs-api.onrender.com/api/tours/delete/${tourId}`);
                if (response.status === 200) {
                    alert("Tour đã được xoá.");
                    setTours(tours.filter(tour => tour.id_tour !== tourId));
                }
            } catch (error) {
                console.error('Lỗi xoá dũ liệu:', error);
                alert("Lỗi khi xoá tour.");
            }
        }
    };

    return (
        <>
            <NavAdmin />
            <header className="container-fluid d-flex justify-content-center align-items-center bg-dark">
                <h1 className="text-center text-white">Quản lý tour</h1>
                <div className="btn btn-outline-primary btn-addtour" onClick={handleShowForm}>
                    Thêm tour
                </div>
            </header>
            {showForm && <AddTour onCloseForm={handleCloseForm} />}
            {showEditForm && <EditTour key={editingTour?.id_tour} editingTour={editingTour} onCloseForm={handleCloseEditForm} />}

            <ListTour tours={tours} onEdit={handleShowEditForm} onDelete={handleDelete} />
        </>
    );
};

const ListTour = ({ tours, onEdit, onDelete }) => {
    return (
        <>
            <h1 className="text-center py-5">Danh sách Tour</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Số ngày</th>
                        <th scope="col">Số người</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map((tour, index) => (
                        <tr key={tour.id_tour}>
                            <th scope="row">{index + 1}</th>
                            <td>{tour.name_tour}</td>
                            <td><img src={`https://server-nodejs-api.onrender.com/${tour.image_tour}`} alt={tour.name_tour} style={{ width: '100px' }} /></td>
                            <td>{tour.day}</td>
                            <td>{tour.person}</td>
                            <td>{tour.price}</td>
                            <td>{tour.quantity}</td>
                            <td>{tour.description || 'No description available'}</td>
                            <td><FontAwesomeIcon onClick={() => onEdit(tour)}  icon={faEdit} /></td>
                            <td><FontAwesomeIcon onClick={() => onDelete(tour.id_tour)} className="text-danger" icon={faTrash} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

const AddTour = ({ onCloseForm, }) => {
    const [formData, setFormData] = useState({
        name_tour: "",
        day: "",
        person: "",
        price: "",
        quantity: "",
        tour_id: ""  // Ensure this is initialized
    });
    const [file, setFile] = useState(null);
    const [tourDetails, setTourDetails] = useState([]);

    useEffect(() => {
        const fetchTourDetails = async () => {
            try {
                const { data } = await axios.get('https://server-nodejs-api.onrender.com/api/tours/listdetail');
                setTourDetails(data);
            } catch (error) {
                console.error('Lỗi tìm nạp tour:', error);
                alert('Lỗi tìm nạp tour');
            }
        };
        fetchTourDetails();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.day <= 0 || formData.person <= 0 || formData.price <= 0 || formData.quantity <= 0) {
            alert("Tất cả các trường là bắt buộc và phải là số hợp lệ nếu có.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('name_tour', formData.name_tour);
        formDataToSend.append('image_tour', file);
        formDataToSend.append('day', formData.day);
        formDataToSend.append('person', formData.person);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('quantity', formData.quantity);
        formDataToSend.append('tour_id', formData.tour_id);

        try {
            const response = await axios.post('https://server-nodejs-api.onrender.com/api/tours/add', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.status === 200) {
                alert("Thêm tour thành công.");
                onCloseForm();
            } else {
                throw new Error('Thêm tour thất bại');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Thêm tour thất bại vui lòng thử lại.");
        }
    };
    return (
        <div className="container">
            <button type="button" className="btn btn-secondary" onClick={onCloseForm}>Đóng</button>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name_tour" className="form-label">Tên tour:</label>
                    <input type="text" className="form-control" id="name_tour" name="name_tour" value={formData.name_tour} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Hình ảnh:</label>
                    <input type="file" className="form-control" id="image" name="image" onChange={handleFileChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="day" className="form-label">Số ngày:</label>
                    <input type="number" className="form-control" id="day" name="day" value={formData.day} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="person" className="form-label">Số người:</label>
                    <input type="number" className="form-control" id="person" name="person" value={formData.person} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Giá:</label>
                    <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Số lượng:</label>
                    <input type="number" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tour_id" className="form-label">Select Description:</label>
                    <select 
                        id="tour_id" 
                        name="tour_id" 
                        value={formData.tour_id} 
                        onChange={handleInputChange} 
                        className="form-control"
                        required
                    >
                        <option value="">Choose description</option>
                        {tourDetails.map((item) => (
                            <option key={item.tour_id} value={item.tour_id}>{item.description}</option>
                        ))}
                    </select>
                </div>
                
                <div className="d-flex justify-content-between mt-3">
                    <button type="submit" className="btn btn-primary">Gửi</button>
                </div>
            </form>
        </div>
    );
};
const EditTour = ({ editingTour, onCloseForm }) => {
    const [formData, setFormData] = useState({
        name_tour: editingTour ? editingTour.name_tour : '',
        day: editingTour ? editingTour.day : '',
        person: editingTour ? editingTour.person : '',
        price: editingTour ? editingTour.price : '',
        quantity: editingTour ? editingTour.quantity : '',
        tour_id: editingTour ? editingTour.tour_id : '',
    });
    const [file, setFile] = useState(null);
    const [tourDetails, setTourDetails] = useState([]);

    useEffect(() => {
        const fetchTourDetails = async () => {
            try {
                const response = await axios.get('https://server-nodejs-api.onrender.com/api/tours/listdetail');
                setTourDetails(response.data);
            } catch (error) {
                console.error('Nạp dữ liệu lõi:', error);
            }
        };

        fetchTourDetails();
    }, [editingTour]);  

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });
    
        if (file) {
            formDataToSend.append('image_tour', file);
        }
    
        try {
            const response = await axios.put(`https://server-nodejs-api.onrender.com/api/tours/update/${editingTour.id_tour}`, formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (response.status === 200) {
                alert("Sửa tour thành công."); 
                onCloseForm();
            } else {
                throw new Error(`Sửa tour thất bại: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Sửa tour thất bại', error);
            alert(`Sửa tour thất bại, vui lòng kiểm tra lại. Error: ${error.response?.data?.message || error.message}`);
        }
    };
    
    return (
        <div className="container">
            <button type="button" className="btn btn-secondary" onClick={onCloseForm}>Đóng</button>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name_tour" className="form-label">Tên tour:</label>
                    <input type="text" className="form-control" id="name_tour" name="name_tour" value={formData.name_tour} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="day" className="form-label">Số ngày:</label>
                    <input type="number" className="form-control" id="day" name="day" value={formData.day} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="person" className="form-label">Số người:</label>
                    <input type="number" className="form-control" id="person" name="person" value={formData.person} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Giá:</label>
                    <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Số lượng:</label>
                    <input type="number" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image_tour" className="form-label">Hình ảnh:</label>
                    <input type="file" className="form-control" id="image_tour" name="image_tour" onChange={handleFileChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="tour_id" className="form-label">Select Description:</label>
                    <select 
                        id="tour_id" 
                        name="tour_id" 
                        value={formData.tour_id} 
                        onChange={handleInputChange} 
                        className="form-control"
                        required
                    >
                        <option value="">Choose description</option>
                        {tourDetails.map((item) => (
                            <option key={item.tour_id} value={item.tour_id}>{item.description}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    );
};

export default Tour;
