import NavAdmin from "./pages/NavAdmin";
import React, { useState, useEffect } from "react";
import axios from 'axios';
const DashboardAdmin = () => {
    const [tourCount, setTourCount] = useState(0);

    const fetchTourCount = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/tours/count');
            console.log("Tour count received:", response.data);
            setTourCount(response.data.totalTours);
        } catch (error) {
            console.error('Error fetching tour count:', error);
        }
    };    

    useEffect(() => {
        fetchTourCount();
    }, []); 
    return(
        <>
            <NavAdmin />
            <section className="container-fluid">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 bg-danger">
                            <div className="">
                                <h2 className="text-center">Tour</h2>
                                <h1 className="text-center py-5">{tourCount}</h1>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 bg-primary">
                            <div className="">
                                <h2 className="text-center">User</h2>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 bg-warning">
                            <div className="">
                                <h2 className="text-center">Employee</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardAdmin;