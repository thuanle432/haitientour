import Header from "../../components/Header";
import NavPage from "../../components/NavPage";
import Slide from "../../components/Slide";
import Footer from "../../components/Footer";
import PriceSlider from "../../utils/PriceSlider";
import DaySlider from "../../utils/DaySlider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import "../../assets/styles/users/PageTour.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PageTour = () => {
    return (
        <>
            <Header />
            <NavPage />
            <Slide />
            <Tour />
            <Footer />
        </>
    );
};

const Tour = () => {
    const [highlightFilter, setHighlightFilter] = useState('');
    const [tours, setTours] = useState([]);
    const [filteredTours, setFilteredTours] = useState([]);
    const [selectedType] = useState('');
    const [priceRange, setPriceRange] = useState([0, 5000000]);
    const [dayRange, setDayRange] = useState([0, 7]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/tours/list');
                setTours(response.data);
                setFilteredTours(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filterTours = () => {
            const filtered = tours.filter(tour =>
                (tour.price >= priceRange[0] && tour.price <= priceRange[1]) &&
                (tour.day >= dayRange[0] && tour.day <= dayRange[1]) &&
                (selectedType === '' || tour.type === selectedType) &&
                (highlightFilter === '' || tour.highlights.includes(highlightFilter))
            );
            setFilteredTours(filtered);
        };
    
        filterTours();
    }, [priceRange, dayRange, selectedType, highlightFilter, tours]);

    return (
        <>
            <section className="container-fluid bg-tour">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-sm-12 col-xl-3">
                            <h3>Bộ lọc thông tin</h3>
                            <div>
                                <label htmlFor="highlight-filter">Hãy nhập địa điểm mà bạn muốn</label>
                                <input 
                                    type="text" 
                                    id="highlight-filter" 
                                    value={highlightFilter} 
                                    onChange={(e) => setHighlightFilter(e.target.value)} 
                                    placeholder="Địa điểm"
                                />
                            </div>
                            <PriceSlider range={priceRange} setRange={setPriceRange} />
                            <DaySlider range={dayRange} setRange={setDayRange} />
                            
                        </div>
                        <div className="col-sm-12 col-xl-9">
                            {filteredTours.map((tour, index) => (
                                <div key={tour.id_tour} className="row py-3 bg-white border rounded">
                                    <div className="col-md-3 mt-1">
                                        <img className="img-fluid img-responsive rounded product-image" src={`http://localhost:3001/${tour.image_tour}`} alt={tour.name_tour} />
                                    </div>
                                    <div className="col-md-6 mt-1">
                                        <h5>{tour.name_tour}</h5>
                                        <div className="d-flex flex-row">
                                            <div className="ratings mr-2"></div>
                                        </div>
                                        <div className="mt-1 mb-1 spec-1 d-flex">
                                            <FontAwesomeIcon className="icon-tour" icon={faUser} />
                                            <span className="title-icon">{tour.person} người</span>
                                        </div>
                                        <div className="mt-1 mb-1 spec-1 d-flex">
                                            <FontAwesomeIcon className="icon-tour" icon={faClock} />
                                            <span className="title-icon">{tour.day} ngày</span>
                                        </div>
                                        <div className="mt-1 mb-1 spec-1 d-flex">
                                            <p>Địa điểm: {tour.highlights}</p>
                                        </div>
                                    </div>
                                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                        <div className="d-flex flex-row align-items-center">
                                            <h4 className="mr-1">{parseInt(tour.price).toLocaleString('vi-VN').replace(/,/g, '.')} VND</h4>
                                        </div>
                                        <div className="d-flex flex-column mt-4">
                                            <Link to={`/viewdetail/${tour.id_tour}`} className="btn btn-primary btn-sm">Details</Link>
                                            <button className="btn btn-outline-primary btn-sm mt-2" type="button">Book</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageTour;
