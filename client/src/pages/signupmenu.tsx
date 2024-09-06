import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupMenu = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/signup/${role}`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@400;700&family=Montserrat:wght@300;500;700&family=Poppins:wght@300;400;500;600&display=swap');

        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('./public/Mountain.jpg'); /* Replace with your image URL */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #F4F6EF; /* Baby Powder */
          text-align: center;
          padding: 20px;
        }

        .quote {
          font-family: 'Expletus Sans', sans-serif;
          font-size: 24px;
          font-weight: 400;
          color: #003300; /* Baby Powder */
          margin-bottom: 40px;
          max-width: 80%;
        }

        .box-container {
          display: flex;
          justify-content: space-around;
          width: 100%;
          max-width: 800px;
        }

        .box {
          background: rgb(51,102,0); /* Semi-transparent background */
          color: #F4F6EF; /* Baby Powder */
          border: none;
          padding: 20px;
          margin: 10px;
          border-radius: 10px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
          text-align: center;
        }

        .box:hover {
          background-color: #003300);
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
        }

        .box:focus {
          outline: none;
        }
      `}</style>

      <div className="container">
        <div className="quote">
          "Travel is the only thing you buy that makes you richer."
        </div>

        <div className="box-container">
          <button className="box" onClick={() => handleRoleSelection('traveler')}>Traveler</button>
          <button className="box" onClick={() => handleRoleSelection('driver')}>Driver</button>
          <button className="box" onClick={() => handleRoleSelection('guide')}>Guide</button>
        </div>
      </div>
    </>
  );
};

export default SignupMenu;
