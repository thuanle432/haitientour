import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../services/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = ({ onSwitchForm }) => {
    const { setUser } = useUser();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState(null);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://server-nodejs-api.onrender.com/api/users/login', formData);
            const { userId, id_role } = response.data;

        if (id_role === 1) {
            setUser({
                id: userId,
                role: id_role
            });
            navigate('/admin');
        } else {
            setUser({
                id: userId,
                username: formData.username,
                role: id_role
            });
            if (id_role === 2) {
                navigate('/employee');
            } else {
            navigate('/');
          }
        }
      } catch (error) {
        setMessage({ text: error.response?.data?.message || 'Đăng nhập thất bại.', type: 'danger' });
      }
    };
  
  
    return (
      <>
        {message && <Alert variant={message.type}>{message.text}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
              <input
                type="text"
                className="form-control"
                id="emailInput"
                onChange={handleChange}
                name="username"
                value={formData.username}
                required
              />
              
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                onChange={handleChange}
                name="password"
                value={formData.password}
                required
              />
              
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <div className="d-flex justify-content-center align-items-center">
            <p className='py-2'>Bạn chưa có tài khoản? </p>
            <p type="button" className="btn btn-link" onClick={onSwitchForm}>Register</p>
          </div>
        </form>
      </>
      
    );
};
export default Login;