import Header from "../../components/Header";
import NavPage from "../../components/NavPage";
import Slide from "../../components/Slide";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

import "../../assets/styles/users/PageContact.css"
const PageContact = () => {
    return(
        <>
            <Header />
            <NavPage />
            <Slide />
            <BoxContact />
            <FormContact />
            <Footer />
        </>
    )
}

const BoxContact = () => {
    return(
        <>
            <section className="container-xxl bg-box-contact">
                <div className="row list-box-contact">
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-3 box-contact mr-5">
                        <h2 className="text-center">Address</h2>
                        <div className="d-flex">
                            <div>
                                <FontAwesomeIcon className="icon-mapmarket text-white rounded-circle" icon={faMapMarkerAlt} />
                            </div>
                            <div className="title-box-contact ">
                                88 Hồng Nhuệ 2- Hoằng Thắng - Hoằng Hoá - Thanh Hoá
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-3 box-contact ">
                        <h2 className="text-center">Contact</h2>
                        <div className="d-flex">
                            <div>
                                <FontAwesomeIcon className="icon-mapmarket text-white rounded-circle" icon={faIdBadge} />
                            </div>
                            <div className="title-box-contact">
                                88 Hồng Nhuệ 2- Hoằng Thắng - Hoằng Hoá - Thanh Hoá
                            </div>
                        </div>
                    </div> 
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-3  box-contact">
                        <h2 className="text-center"> Office Hour</h2>
                        <div className="d-flex">
                            <div>
                                <FontAwesomeIcon className="icon-mapmarket text-white rounded-circle" icon={faIdBadge} />
                            </div>
                            <div className="title-box-contact">
                                88 Hồng Nhuệ 2- Hoằng Thắng - Hoằng Hoá - Thanh Hoá
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const FormContact = () => {
    return(
        <>
            <section className="container-xxxl bg-form-contact">
                <div className="container-xxl"> 
                    <h3 className="text-center text-danger">Contact Us</h3>
                    <h1 className="text-center">Contact</h1>
                    <div className="container my-5">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control mt-3" placeholder="First Name *" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control mt-3" placeholder="Last Name *" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input type="email" className="form-control mt-3" placeholder="Email *" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="tel" className="form-control mt-3" placeholder="Phone Number *" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <textarea className="form-control mt-3" placeholder="Message..." rows="4" required></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col text-center">
                                    <button type="submit" className="btn text-white mt-3">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PageContact;