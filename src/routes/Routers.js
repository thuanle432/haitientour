import Dashboard from "../pages/Dashboard";
import PageContact from "../pages/users/PageContact";
import PageAboutUs from "../pages/users/PageAboutUs";
import PageBlog from "../pages/users/PageBlog";
import PageTour from "../pages/users/PageTour";
import Sigin from "../pages/users/Sigin";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useUser } from "../services/UserContext";
import Tour from "../pages/admin/pages/Tour";
import TourDetail from "../pages/admin/pages/TourDetail";
import ViewDetail from "../pages/users/ViewDetail";
import BooKingProcess from "../pages/users/BookingProcess";
import NoProcess from "../pages/admin/pages/Noprocess";
import Successprocess from "../pages/admin/pages/Successprocess";
const Routers = () => {
    const {user} = useUser();
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Dashboard />} />
                    <Route path="/tour" element={ <PageTour />} />
                    <Route path="/contact" element={ <PageContact />} />
                    <Route path="/about" element={ <PageAboutUs />} />
                    <Route path="/blog" element={ <PageBlog />} />
                    <Route path="/signin" element={ <Sigin />} />

                    <Route path="/admin" element={user?.role === 1 ? <DashboardAdmin /> : <Navigate to="/signin" /> } />
                    <Route path="/admin/tour" element={ <Tour />} />
                    <Route path="/admin/tourdetail" element={ <TourDetail />} />
                    <Route path="/admin/noprocess" element={ <NoProcess />} />
                    <Route path="/admin/successprocess" element={ <Successprocess /> } />

                    <Route path="/viewdetail/:id_tour" element={<ViewDetail />} />
                    <Route path="/bookingprocess/:userId" element={<BooKingProcess />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routers;