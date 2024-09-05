import React from 'react';

const DriverSignup = () => {
  return (
    <>
      <style>{`
               .menu-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
        }
        .role-button {
          padding: 15px 30px;
          margin: 10px;
          font-size: 18px;
          background-color: #fff;
          border: 2px solid #000;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.3s;
        }
        .role-button:hover {
          background-color: #ddd;
        }
      `}</style>
      
      <div className="container">
        <div className="login-form">
          <p className="txt3">Sign up as Driver</p>
          <form>
            <label htmlFor="name" className="txt5">Name</label>
            <input className="name" type="text" id="name" name="name" required placeholder="Enter the name" />

            <label htmlFor="email" className="txt6">Email address</label>
            <input className="email" type="email" id="email" name="email" required placeholder="Enter your email" />

            <label htmlFor="driver_license" className="txt6">Driver License</label>
            <input type="text" id="driver_license" name="driver_license" required placeholder="Enter driver license number" />

            <label htmlFor="eligibility" className="txt6">Eligibility</label>
            <input type="checkbox" id="eligibility" name="eligibility" /> I am eligible to drive

            <button type="submit" className="txt7">Sign up as Driver</button>
          </form>
        </div>
        <div className="image-section">
          <img src="driver-signup.jpg" alt="Driver" />
        </div>
      </div>
    </>
  );
};

export default DriverSignup;
