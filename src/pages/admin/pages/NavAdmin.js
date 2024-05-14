import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
const NavAdmin = () => {
    return(
        <>
            <div className="position-absolute">
                <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <FontAwesomeIcon className="text-dark" icon={faBars} />
                </button>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                        <h1 className="offcanvas-title" id="offcanvasScrollingLabel">Admin</h1>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Link class="nav-link active mt-2" to="/admin">
                            <FontAwesomeIcon className="px-1" icon={faThLarge} />
                            Dashboard</Link>
                        <Link class="nav-link active mt-2" to="/admin/tour">
                            <FontAwesomeIcon className="px-1" icon={faFlag} />
                            Tour</Link>
                        <Link class="nav-link active mt-2" to="/admin/tourdetail">
                            <FontAwesomeIcon className="px-1" icon={faSave} />
                            Tour Detail</Link>
                        <div className="d-flex mt-2">
                            <FontAwesomeIcon className="mt-1 px-1" icon={faTag} />
                            <NavDropdown  title="Booking" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/admin/noprocess">
                                    Chưa xử lý
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/admin/successprocess">
                                    Đã xử lý
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavAdmin