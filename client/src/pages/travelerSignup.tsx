import React, { useState } from 'react';
import axios from 'axios';

const travelerSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user', // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/signup', formData); // No need to specify localhost:3000
      alert('Signup successful! Redirecting to login...');
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup failed', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="driver">Driver</option>
        <option value="guide">Guide</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
};

export default travelerSignup;
