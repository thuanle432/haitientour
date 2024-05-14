import React, { useState } from 'react';
import '../../assets/styles/users/Sigin.css';
import NavPage from "../../components/NavPage"
import Login from './Login';
import Register from './Register';
import Header from '../../components/Header';

const Sigin = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const handleSwitchForm = () => {
      setIsLoginForm(!isLoginForm);
    };
  
    return (
      <>
        <Header />
        <NavPage />
        <div className="sigin-container"> 
          <div className="overlay"></div> 
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    {isLoginForm ? (
                      <>
                        <h1 className="card-title text-center py-5">Đăng nhập</h1>
                        <Login onSwitchForm={handleSwitchForm} />
                      </>
                    ) : (
                      <>
                        <h1 className="card-title text-center py-5">Đăng ký</h1>
                        <Register onSwitchForm={handleSwitchForm} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Sigin;