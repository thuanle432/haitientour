import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Form, Button } from 'react-bootstrap';


const Register = ({ onSwitchForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'username') {
      let errorMesage = '';
      if (value.length < 6) {
        errorMesage = 'Username must be 6 characters or more.';
      }
      if (/[\s\W]/.test(value)) {
        errorMesage = 'Username must not contain spaces or special characters.';
      }
      if (!/\d/.test(value)) {
        errorMesage = 'Username must include a number.';
      }
      setErrors(prevErrors => ({ ...prevErrors, [name]: errorMesage }));
    }

    if (name === 'password') {
      let errorMesage = '';
      if (value.length < 8) {
        errorMesage = 'Password must be at least 8 characters long.';
      }
      if (/\s/.test(value)) {
        errorMesage = 'Password must not contain spaces.';
      }
      if (!/[A-Z]/.test(value)) {
        errorMesage = 'Password must include one uppercase letter.';
      }
      setErrors(prevErrors => ({ ...prevErrors, [name]: errorMesage }));
    }

    if (name === 'confirmPassword') {
      if (value !== formData.password) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: 'Confirm Password must match Password.' }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await axios.post('http://localhost:3001/api/users/register', {
        username: formData.username,
        password: formData.password,
      });

      setMessage({ text: response.data.message, type: 'success' });
      setFormData({
        username: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrors(prevErrors => ({ ...prevErrors, username: 'Username already exists. Please choose another one.' }));
      } else {
        setMessage({ text: error.response?.data?.message || 'Registration failed.', type: 'danger' });
      }
    }
  };

  return (
    <div>
      {message && <Alert variant={message.type}>{message.text}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={Object.values(errors).some(error => error !== '')}>
          Register
        </Button>
        <div className="d-flex justify-content-center align-items-center">
          <p className='py-2'>Bạn đã tài khoản? </p>
          <p type="button" className="btn btn-link" onClick={onSwitchForm}>Login</p>
        </div>
      </Form>
    </div>
  );
};

export default Register;
