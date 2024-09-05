import React from 'react';

const TravelerSignup = () => {
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
          <p className="txt3">Sign up as Traveler</p>
          <form>
            <label htmlFor="name" className="txt5">Name</label>
            <input className="name" type="text" id="name" name="name" required placeholder="Enter the name" />

            <label htmlFor="email" className="txt6">Email address</label>
            <input className="email" type="email" id="email" name="email" required placeholder="Enter your email" />

            <label htmlFor="passport_number" className="txt6">Passport Number</label>
            <input type="text" id="passport_number" name="passport_number" required placeholder="Enter passport number" />

            <label htmlFor="passport_issued_date" className="txt6">Passport Issued Date</label>
            <input type="date" id="passport_issued_date" name="passport_issued_date" required />

            <label htmlFor="passport_expiry_date" className="txt6">Passport Expiry Date</label>
            <input type="date" id="passport_expiry_date" name="passport_expiry_date" required />

            <button type="submit" className="txt7">Sign up as Traveler</button>
          </form>
        </div>
        <div className="image-section">
          <img src="traveler-signup.jpg" alt="Traveler" />
        </div>
      </div>
    </>
  );
};

export default TravelerSignup;
