import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavAdmin from './NavAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const TourDetail = () => {
    const [tourDetails, setTourDetails] = useState([]);
    const [editingDetail, setEditingDetail] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchTourDetails = async () => {
            try {
                const { data } = await axios.get('https://server-nodejs-api.onrender.com/api/tours/listdetail');
                setTourDetails(data);
            } catch (error) {
                console.error('Error fetching tour details:', error);
                alert('Failed to fetch tour details');
            }
        };
        fetchTourDetails();
    }, []);

    const handleShowForm = (detail = null) => {
        setEditingDetail(detail);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleDelete = async (detailId) => {
        if (window.confirm("Bạn có chắc chắn muốn xoá chi tiết tour này không?")) {
            try {
                await axios.delete(`https://server-nodejs-api.onrender.com/api/tours/deletedetail/${detailId}`);
                setTourDetails(prevDetails => prevDetails.filter(detail => detail.tour_id !== detailId));
                alert("Chi tiết tour đã được xoá.");
            } catch (error) {
                console.error('Error deleting tour detail:', error);
                alert("Lỗi khi xoá chi tiết tour.");
            }
        }
    };

    return (
        <>
            <NavAdmin />
            <header className="container-fluid d-flex justify-content-center align-items-center">
                <h1 className="text-center">Quản lý chi tiết tour</h1>
                <button className="btn btn-outline-primary" onClick={() => handleShowForm()}>
                    Thêm chi tiết
                </button>
            </header>
            {showForm && <AddEditTourDetail detail={editingDetail} onCloseForm={handleCloseForm} />}

            <ListTourDetails details={tourDetails} onEdit={handleShowForm} onDelete={handleDelete} />
        </>
    );
};

const ListTourDetails = ({ details, onEdit, onDelete }) => {
    return (
        <>
            <h1 className="text-center py-5">Danh sách Chi Tiết Tour</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Điểm nổi bật</th>
                        <th scope="col">Lịch trình</th>
                        <th scope="col">Bao gồm</th>
                        <th scope="col">Không bao gồm</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail, index) => (
                        <tr key={detail.tour_id}>
                            <th scope="row">{index + 1}</th>
                            <td>{detail.description}</td>
                            <td>{detail.highlights}</td>
                            <td>{detail.itinerary}</td>
                            <td>{detail.includes}</td>
                            <td>{detail.excludes}</td>
                            <td><FontAwesomeIcon onClick={() => onEdit(detail)} icon={faEdit} /></td>
                            <td><FontAwesomeIcon onClick={() => onDelete(detail.tour_id)} className="text-danger" icon={faTrash} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};


const AddEditTourDetail = ({ detail, onCloseForm }) => {

    const [formData, setFormData] = useState({
        name_detail: detail ? detail.name_detail : "",
        description: detail ? detail.description : "",
        highlights: detail ? detail.highlights : "",
        itinerary: detail ? detail.itinerary : "",
        includes: detail ? detail.includes : "",
        excludes: detail ? detail.excludes : ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = detail
            ? `https://server-nodejs-api.onrender.com/api/tours/updatedetail/${detail.tour_id}` 
            : 'https://server-nodejs-api.onrender.com/api/tours/adddetail';
        const method = detail ? 'put' : 'post';

        try {
            const response = await axios({
                method: method,
                url: endpoint,
                data: formData
            });
            if (response.status === 200 || response.status === 201) {
                alert(`Chi tiết tour ${detail ? 'Sửa' : 'Thêm'} thành công.`);
                onCloseForm(); 
            } else {
                alert('Thêm chi tiết tour thất baiuj, vui lòng thử lại.');
            }
        } catch (error) {
            console.error('Thêm chi tiết tour thất bại:', error);
            alert(`Thêm chi tiết tour thất bại: ${error.message}`);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="highlights" className="form-label">Highlights:</label>
                    <textarea className="form-control" id="highlights" name="highlights" value={formData.highlights} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="itinerary" className="form-label">Itinerary:</label>
                    <textarea className="form-control" id="itinerary" name="itinerary" value={formData.itinerary} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="includes" className="form-label">Includes:</label>
                    <textarea className="form-control" id="includes" name="includes" value={formData.includes} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="excludes" className="form-label">Excludes:</label>
                    <textarea className="form-control" id="excludes" name="excludes" value={formData.excludes} onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary">
                    {detail ? 'Sửa' : 'Thêm'} Tour Detail
                </button>
            </form>
        </div>
    );
};


export default TourDetail;
