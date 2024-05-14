import NavAdmin from "./NavAdmin";
import axios from "axios";
import React, {useState, useEffect} from "react";
const Successprocess = () => {
    const [bookings, setBooking] = useState([]);

    useEffect(() => {
        const fetchBooking = async() => {
            try{
                const response = await axios.get('https://server-nodejs-api.onrender.com/api/users/listsuccessbooking');
                setBooking(response.data);
            } catch (error){
                console.error("Lỗi khi lấy dữ liệu")
            }
        }
        fetchBooking();
    }, [])
    return(
        <>
            <NavAdmin />
            <header className="container-fluid d-flex justify-content-center align-items-center">
                <h1 className="text-center">Danh sách xác nhận</h1>
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
                                        <td>Ngày: {new Date (booking.date).toLocaleDateString('vi-VN')}</td>
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

export default Successprocess;