import imgSlide from "../assets/images/imgSlide.png"
import "../assets/styles/Slide.css"
const Slide = () => {
    return(
        <>
            <section id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgSlide} className="w-100"  alt="Side"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Slide;