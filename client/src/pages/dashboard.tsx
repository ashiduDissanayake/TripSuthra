import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // If no token, redirect to login
    if (!token) {
      window.location.href = '/login';
      return;
    }

    // Fetch user details using the token
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token in Authorization header
          },
        });

        // Set the user details in the state
        setUserDetails(response.data);
      } catch (error) {
        setError('Failed to fetch user details.');
      }
    };

    fetchUserDetails();
  }, []);

  // If no user details, display loading or error
  if (!userDetails) {
    return error ? <p>{error}</p> : <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {userDetails.name}!</p>
      <p>Email: {userDetails.email}</p>
      <p>Role: {userDetails.role}</p>

      {/* Add more user details as needed */}
    </div>
  );
};

export default Dashboard;
