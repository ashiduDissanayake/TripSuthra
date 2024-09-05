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
      
      <div className="menu-container">
        <div>
          <h2>Sign up as:</h2>
          <button className="role-button" onClick={() => handleRoleSelection('traveler')}>Traveler</button>
          <button className="role-button" onClick={() => handleRoleSelection('driver')}>Driver</button>
          <button className="role-button" onClick={() => handleRoleSelection('guide')}>Guide</button>
        </div>
      </div>
    </>
  );
};

export default SignupMenu;
