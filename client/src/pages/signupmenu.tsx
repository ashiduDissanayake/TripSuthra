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
          background-image: url('https://example.com/your-background-image.jpg'); /* Replace with your image URL */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
        }

        /* Overlay to darken the background image */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(19, 41, 75, 0.75); /* Oxford Blue with 75% opacity */
          z-index: 1;
        }

        .menu-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #F4F6EF; /* Baby Powder */
        }

        h2 {
          font-family: 'Expletus Sans', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #F4F6EF; /* Baby Powder */
          margin-bottom: 20px;
          text-align: center;
        }

        .role-button {
          background-color: #087E8B; /* Teal */
          color: white;
          font-family: 'Montserrat', sans-serif;
          border: none;
          padding: 14px 30px;
          margin: 15px;
          font-size: 18px;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .role-button:hover {
          background-color: #065E63; /* Darker Teal */
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .role-button:focus {
          outline: none;
        }
      `}</style>

      <div className="overlay"></div> {/* Overlay to darken the background image */}

      <div className="menu-container">
        <h2>Sign up as:</h2>
        <button className="role-button" onClick={() => handleRoleSelection('traveler')}>Traveler</button>
        <button className="role-button" onClick={() => handleRoleSelection('driver')}>Driver</button>
        <button className="role-button" onClick={() => handleRoleSelection('guide')}>Guide</button>
      </div>
    </>
  );
};

export default SignupMenu;
