import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
                        <Link class="nav-link active" to="/admin">Dashboard</Link>
                        <Link class="nav-link active" to="/admin/tour">Tour</Link>
                        <Link class="nav-link active" to="/admin/tourdetail">Tour Detail</Link>
                        <NavDropdown title="Booking" id="navbarScrollingDropdown">
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
        </>
    )
}

export default NavAdmin