import Header from "../../components/Header";
import NavPage from "../../components/NavPage";
import Slide from "../../components/Slide";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "../../assets/styles/users/PageAboutUs.css"
import imgAbout1 from "../../assets/images/about-1.jpeg"
import imgAbout2 from "../../assets/images/about-2.jpeg"
import imgAbout3 from "../../assets/images/about-3.jpeg"
import imgAbout4 from "../../assets/images/about-4.jpeg"
import "../../assets/styles/users/PageAboutUs.css"
import { Link } from "react-router-dom";
const PageAboutUs = () => {
    return(
        <>
            <Header />
            <NavPage />
            <Slide />
            <AboutUs />
            <ListParam />
            <AboutUsTwo />
            <Footer />
        </>
    )
}
const AboutUs = () => {
    return(
        <>
            <section className="container-fluid bg-aboutus">
                <section className="container-xxl">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <h1 className="title-about text-danger">Welcome</h1>
                            <h2 className="title-introduce">Our values are the driving force behind everything we do</h2>
                            <p className="title-main">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, 
                                qui earum veritatis atque placeat quae expedita, et sunt sed nam 
                                vitae pariatur in, inventore vero tempora perspiciatis? Voluptatibus, 
                                quibusdam eius.
                            </p>
                            <div className="box-img-about">
                                <img src={imgAbout1} className="w-100 d-block" alt="img about 1"/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="box-img-about-2">
                                <img src={imgAbout2} className="w-100 d-block" alt="img about 1"/>
                            </div>
                            <div className="box-img-about-3">
                                <img src={imgAbout3} className="w-100 d-block" alt="img about 1"/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

const ListParam = () => {
    return(
        <>
            <section className="container-fluid bg-list-param">
                <div className="container-xxl">
                    <div className="list-params">
                        <div className=" row d-flex">
                            <div className="col-sm-12 col-md-6 col-lg-3 box-param">
                                <div>
                                    <FontAwesomeIcon className="icon-list-param mx-auto d-flex rounded-circle text-white" icon={faMapMarkerAlt} />
                                    <div>
                                        <h1 className="text-white text-center py-3">20+</h1>
                                        <h2 className="text-white text-center py-3">Location</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 box-param">
                                <div>
                                    <FontAwesomeIcon className="icon-list-param mx-auto d-flex rounded-circle text-white" icon={faMapMarkerAlt} />
                                    <div>
                                        <h1 className="text-white text-center py-3">200</h1>
                                        <h2 className="text-white text-center py-3">Client</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 box-param">
                                <div>
                                    <FontAwesomeIcon className="icon-list-param mx-auto d-flex rounded-circle text-white" icon={faMapMarkerAlt} />
                                    <div>
                                        <h1 className="text-white text-center py-3">10</h1>
                                        <h2 className="text-white text-center py-3">Tour</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 box-param">
                                <div>
                                    <FontAwesomeIcon className="icon-list-param mx-auto d-flex rounded-circle text-white" icon={faMapMarkerAlt} />
                                    <div>
                                        <h1 className="text-white text-center py-3">20+</h1>
                                        <h2 className="text-white text-center py-3">Location</h2>
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
const AboutUsTwo = () => {
    return(
        <>
            <section className="container-fluid py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src={imgAbout4} className="w-100 d-block" alt=""/>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <h2 className="text-danger">Our values are the driving force behind everything we do</h2>
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Corrupti fuga, doloribus sed voluptatem facere enim blanditiis! 
                                Omnis, quidem. Placeat non error adipisci enim doloremque 
                                iusto asperiores eligendi molestias illo ducimus.
                            </p>
                            <button as={Link} to="/contact" type="button py-3" className="btn btn-outline-danger"> Contact US</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PageAboutUs;