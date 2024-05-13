import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgCaroudel1 from "../assets/images/carousel-1.jpeg"
import imgCaroudel2 from "../assets/images/carousel-2.jpeg"
import imgCaroudel3 from "../assets/images/carousel-3.jpeg"
import imgCaroudel4 from "../assets/images/carousel-4.jpeg"
import imgCaroudel5 from "../assets/images/carousel-5.jpg"
import "../assets/styles/ImageCarousel.css"
const ImageCarousel = () => {
    const images = [
        imgCaroudel1,
        imgCaroudel2,
        imgCaroudel3,
        imgCaroudel4,
        imgCaroudel5
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className="container-fluid py-5">
                <div className="container-xxl"> 
                    <SlickSlider {...settings}>
                        {images.map((image, idx) => (
                        <div key={idx} className="slide-image-container">
                            <img src={image} className="slide-image" alt={`Slide ${idx}`} />
                        </div>
                        ))}
                    </SlickSlider>
                </div>
            </section>
        </>
    );
};

export default ImageCarousel;