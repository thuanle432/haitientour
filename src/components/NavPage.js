import { NavLink } from 'react-router-dom';
import imgLogo from "../assets/images/imgLogo.png"
import "../assets/styles/NavPage.css"
const NavPage = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-xxl">
                <NavLink className="navbar-brand" to="/">
                    <img src={imgLogo} alt="Logo"/>
                </NavLink>
                <button className="navbar-toggler bg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon icon-bars"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <div className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img src={imgLogo}  alt="Logo"/>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/tour">Tour</NavLink>
                        </li>
                        <li className="nav-item item">
                            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item item">
                            <NavLink className="nav-link" activeClassName="active" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item item">
                            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      );
}
export default NavPage;