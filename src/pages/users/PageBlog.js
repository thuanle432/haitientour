import Header from "../../components/Header"
import NavPage from "../../components/NavPage"
import Slide from "../../components/Slide"
import Footer from "../../components/Footer"
import "../../assets/styles/users/PageBlog.css"
import imgBlog1 from "../../assets/images/blog-1.jpeg"
const PageBlog = () => {
    return(
        <>
            <Header />
            <NavPage />
            <Slide />
            <Blog />
            <Footer />
        </>
    )
}
const Blog = () => {
    return(
        <>
            <section className="container-fluid bg-blog">
                <div className="container-xxl">
                    <div className="row list-blog">
                        <div className="col-sm-12 col-md-6 box-img-blog">
                            <img src={imgBlog1} className="w-100" alt="BLog 1"/>
                        </div>
                        <div className="col-sm-12 col-md-6 box-blog">
                            <h1 className="text-center text-white">Vị trí</h1>
                            <p className="text-white">
                                Cách Hà Nội 165km, cách trung tâm Thành Phố Thanh Hóa gần 20 km, bãi biển Hải Tiến thuộc địa phận 4 xã phía đông là xã Hoằng Trường,
                                Hoằng Hải, Hoằng Tiến và Hoằng Thanh của huyện Hoằng Hóa, 
                                Tỉnh Thanh Hóa.  
                            </p>
                        </div>
                    </div>

                    <div className="row list-blog">
                        <div className="col-sm-12 col-md-6 box-img-blog">
                            <img src={imgBlog1} className="w-100" alt="BLog 1"/>
                        </div>
                        <div className="col-sm-12 col-md-6 box-blog">
                            <h1 className="text-center text-white">Vị trí</h1>
                            <p className="text-white">
                                Cách Hà Nội 165km, cách trung tâm Thành Phố Thanh Hóa gần 20 km, bãi biển Hải Tiến thuộc địa phận 4 xã phía đông là xã Hoằng Trường,
                                Hoằng Hải, Hoằng Tiến và Hoằng Thanh của huyện Hoằng Hóa, 
                                Tỉnh Thanh Hóa.  
                            </p>
                        </div>
                    </div>

                    <div className="row list-blog">
                        <div className="col-sm-12 col-md-6 box-img-blog">
                            <img src={imgBlog1} className="w-100" alt="BLog 1"/>
                        </div>
                        <div className="col-sm-12 col-md-6 box-blog">
                            <h1 className="text-center text-white">Vị trí</h1>
                            <p className="text-white">
                                Cách Hà Nội 165km, cách trung tâm Thành Phố Thanh Hóa gần 20 km, bãi biển Hải Tiến thuộc địa phận 4 xã phía đông là xã Hoằng Trường,
                                Hoằng Hải, Hoằng Tiến và Hoằng Thanh của huyện Hoằng Hóa, 
                                Tỉnh Thanh Hóa. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PageBlog;