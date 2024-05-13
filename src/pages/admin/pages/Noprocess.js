import axios from "axios";
import NavAdmin from "./NavAdmin";
import React, {useState, useEffect} from "react";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
const NoProcess = () => {
    const [bookings, setBooking] = useState([]);

    useEffect(() => {
        const fetchBooking = async() => {
            try{
                const response = await axios.get("http://localhost:3001/api/users/listbookingstatus");
                setBooking(response.data);
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            }
        }
        fetchBooking();
    }, []);

    const successBooking = async (id_account) => {
        try{
            const response = await axios.patch(`http://localhost:3001/api/users/successbooking/${id_account}`,{
                status: 3
            });

            if (response.status === 200) {
                alert('Booking status updated successfully');
                console.log('Booking status updated successfully');
            }
        } catch (error) {
            console.error('Failed to update booking status:', error);
        }
    }
    return(
        <>
            <NavAdmin />
            <header className="container-fluid d-flex justify-content-center align-items-center">
                <h1 className="text-center">Danh sách chưa xử lý</h1>
            </header>
            <section className="intro py-5">
                <div className="bg-image h-100">
                    <div className="mask d-flex align-items-center h-100">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="table-responsive bg-white" data-mdb-perfect-scrollbar="true" >
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Tên tour</th>
                                        <th scope="col">Giá tiền</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Số điện thoại</th>
                                        <th scope="col">Ngày bắt đầu</th>
                                        <th scope="col">Xác nhận</th>
                                        <th scope="col">Huỷ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {bookings.map((booking, index) => (
                                    <tr key={booking.id_booking}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{booking.name}</td>
                                        <td>{booking.name_tour}</td>
                                        <td>{booking.price}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.phone_number}</td>
                                        <td>{booking.date}</td>
                                        <td><FaCheckCircle onClick={() => successBooking(booking.id_account)} className="text-success d-flex d-block justify-content-center align-items-center" /> </td>
                                        <td><FaTimesCircle className="text-danger d-flex d-blox justify-content-center align-items-center" /> </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NoProcess;