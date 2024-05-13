import "../assets/styles/Footer.css"
import imgLogo from "../assets/images/imgLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return(
        <>
            <section className="container-fluid bg-dark footer">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img src={imgLogo} className="logo-footer w-100 mx-auto d-block py-5" alt="Logo"/>
                            <p className="text-center text-white">
                                Chào mừng bạn đến với gói du lịch tốt nhất của chúng tôi!
                                Nếu bạn đang tìm kiếm một hành trình đáng nhớ và tiện ích, 
                                đây là lựa chọn hoàn hảo dành cho bạn.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <h1 className="text-white text-center py-5">Contact us</h1>
                            <div className="d-flex mt-3 ">
                                <FontAwesomeIcon className="text-white icon-footer rounded-circle" icon={faMapMarkerAlt} />
                                <p className="text-white title-icon-footer">haitientour@gmail.com</p>
                            </div>
                            <div className="d-flex mt-3 ">
                                <FontAwesomeIcon className="text-white icon-footer rounded-circle" icon={faIdBadge} />
                                <p className="text-white title-icon-footer">0865331920</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <h1 className="text-white text-center py-5">Follow</h1>
                            <div className="list-follow d-flex justify-content-evenly py-3">
                                <FontAwesomeIcon className="text-white icon-footer rounded-circle" icon={faTiktok}/>
                                <FontAwesomeIcon className="text-white icon-footer rounded-circle" icon={faYoutube} />
                                <FontAwesomeIcon className="text-white icon-footer rounded-circle" icon={faFacebook} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;