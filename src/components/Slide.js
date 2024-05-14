import imgSlide1 from "../assets/images/Slide-1.jpeg"
import imgSlide2 from "../assets/images/Slide-2.jpeg"
import imgSlide3 from "../assets/images/Slide-3.jpeg"
import "../assets/styles/Slide.css"
const Slide = () => {
    return (
        <div className="container-xxxl mt-4">
            <div id="dharamshalaCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgSlide1} className="d-block w-100" alt="Scene 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={imgSlide2} className="d-block w-100" alt="Scene 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={imgSlide3} className="d-block w-100" alt="Scene 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#dharamshalaCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#dharamshalaCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
export default Slide;