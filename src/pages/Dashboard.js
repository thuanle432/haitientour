import Header from "../components/Header";
import NavPage from "../components/NavPage";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import "../assets/styles/Dashboard.css"
import imgBlogFood1 from "../assets/images/Blog-Food-1.jpg"
import imgBlogFood2 from "../assets/images/Blog-Food-2.jpg"
import imgBlogFood3 from "../assets/images/Blog-Food-3.jpg"
import imgBlogFood4 from "../assets/images/Blog-Food-4.jpg"
import imgBlogFood5 from "../assets/images/Blog-Food-5.jpg"
import imgBlogFood6 from "../assets/images/Blog-Food-6.jpg"

const Dashboard = () => {
    return(
        <> 
            <Header />
            <NavPage />
            <Slide />
            <Destination />
            <TourSale />
            <BlogFood />
            <Footer />
        </>
    )
}
const Destination = () => {
    return(
        <>
            <h1 className="text-center text-danger pt-5">Điểm đến không thể bỏ qua</h1>
            <h2 className="text-center text-danger pt-5">Chiêm ngưỡng tuyệt tác thiên nhiên</h2>
            <ImageCarousel />
        </>
    )
}

const TourSale = () => {
    return(
        <>
            <section className="container-fluid py-5 bg-tour-sale">
                <div className="image-overlay"></div>
                <div className="container-xxl">
                    <h1 className="text-center text-white position-relative title-tour-sale pt-5">Tour Sale</h1>
                    {/* <div className="row py-3">
                        <div className="col-sm-12 col-md-6">
                            <img src={imgTour1} className="w-100" alt=""/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2 className="text-danger text-center">Tour Basic</h2>
                            <div className="row">
                                <div className="col-sm-12 col-lg-5">
                                    <div className="d-flex">
                                        <FontAwesomeIcon className="icon-tour" icon={faClock} />
                                        <p className="title-icon text-danger">2 days</p>
                                    </div>
                                    <div className="d-flex">
                                        <FontAwesomeIcon className="icon-tour" icon={faUser} />
                                        <p className="title-icon text-danger">1 - 4 persons</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-7">
                                    <h2 className="py-4">5,000,000 VND</h2>
                                    <button type="button py-3" className="btn btn-outline-danger mr-3"> View tour</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

const BlogFood = () => {
    return(
        <>
            <section className="container-fluid bg-blog-food">
                <div className="container-xxl">
                    <h1 className="text-danger text-center">Thưởng thức đặc sản Thanh Hoá</h1>
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-6 col-lg-4 box-blog-food">
                            <img src={imgBlogFood1} className="w-100" alt="Blog food"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 box-blog-food">
                            <img src={imgBlogFood2} className="w-100" alt="Blog food"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 box-blog-food">
                            <img src={imgBlogFood3} className="w-100" alt="Blog food"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 box-blog-food">
                            <img src={imgBlogFood4} className="w-100" alt="Blog food"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 box-blog-food">
                            <img src={imgBlogFood5} className="w-100" alt="Blog food"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 box-blog-food">
                            <img src={imgBlogFood6} className="w-100" alt="Blog food"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Dashboard;