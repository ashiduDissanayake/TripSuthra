import React from 'react';

const GuideSignup = () => {
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
          <p className="txt3">Sign up as Guide</p>
          <form>
            <label htmlFor="name" className="txt5">Name</label>
            <input className="name" type="text" id="name" name="name" required placeholder="Enter the name" />

            <label htmlFor="email" className="txt6">Email address</label>
            <input className="email" type="email" id="email" name="email" required placeholder="Enter your email" />

            <label htmlFor="passport_number" className="txt6">Passport Number</label>
            <input type="text" id="passport_number" name="passport_number" required placeholder="Enter passport number" />

            <label htmlFor="passport_issued_date" className="txt6">Passport Issued Date</label>
            <input type="date" id="passport_issued_date" name="passport_issued_date" required />

            <label htmlFor="eligibility" className="txt6">Eligibility</label>
            <input type="checkbox" id="eligibility" name="eligibility" /> I am a certified guide

            <button type="submit" className="txt7">Sign up as Guide</button>
          </form>
        </div>
        <div className="image-section">
          <img src="guide-signup.jpg" alt="Guide" />
        </div>
      </div>
    </>
  );
};

export default GuideSignup;
