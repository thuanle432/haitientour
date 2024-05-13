import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../services/UserContext';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles/Header.css"
const Header = () => {
    const { user } = useUser();
    const {logout} = useUser();
    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate("/")
    }
    return(
        <>
            <header className="container-fluid bg-dark">
                <div className="container-xxl header">
                    <div className="row">
                        <div className="col-sm-10 col-lg-6 col-xxl-3 d-none d-md-flex header-icon-mail">
                            <FontAwesomeIcon className="bg-light icon-envelope rounded-circle" icon={faEnvelope} />
                            <p className="text-white title-mail">haitientour@gmail.com</p>
                        </div>
                        <div className=" col-lg-3 col-xxl-2 d-none d-xxl-flex justify-content-center align-items-center">
                            <FontAwesomeIcon className="bg-light icon-phone rounded-circle" icon={faPhone} />
                            <p className="text-white number-phone">0865331920</p>
                        </div>
                        <div className="col-sm-2 col-lg-6 col-xxl-7 box-login">
                            {user ? (
                                <>
                                    <button className="btn btn-icon-name" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        <FontAwesomeIcon className="bg-light icon-user" icon={faUser} />
                                    </button>

                                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div className="offcanvas-header">
                                            <h1 className="offcanvas-title py-3 text-center" id="offcanvasRightLabel">{user.username}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <Link to={`/bookingprocess/${user.id}`}>Quản lý đơn hàng</Link>
                                            <hr />
                                            <div className="btn text-center d-flex" onClick={handleLogout}>
                                                <FontAwesomeIcon className="pt-1 mx-2" icon={faSignOutAlt} />
                                                <p>Đăng xuất</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                
                            ) : (
                                <Link to="/signin">
                                    <FontAwesomeIcon className="bg-light icon-user text-end" icon={faUser} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;