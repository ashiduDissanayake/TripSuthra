import { useState } from 'react';

const SignupDriver = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    license: '',
    eligible: false,
  });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData); // Process form data
  };

  return (
    <>
      <style>{`
        .signup-container {
          display: flex;
          height: 100vh;
          font-family: 'Poppins', sans-serif;
        }
        .left-section {
          flex: 1;
          background-color: #F4F6EF;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 50px;
        }
        .left-section h2 {
          font-size: 32px;
          font-weight: 600;
          color: #13294B;
        }
        .logo {
          display: flex;
          align item: left;
        }
        .logo img {
          height: 50px;
          margin-right: 10px;
        }
        .right-section {
          flex: 1;
          background-color: #E0F7FA;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .form-box {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 300px;
        }
        .form-box label {
          font-size: 14px;
          color: #13294B;
          font-weight: 500;
          display: block;
          margin-bottom: 8px;
        }
        .form-box input {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #087E8B;
          border-radius: 5px;
        }
        .form-box input[type="checkbox"] {
          width: auto;
        }
        .form-box button {
          background-color: #087E8B;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
          width: 100%;
        }
        .form-box button:hover {
          background-color: #065C67;
        }
      `}</style>

      <div className="signup-container">
        <div className="left-section">
          <div>
            <div className="logo">
              <img src="/public/11.png" alt="Logo" />
              
            </div>
            <h2>Sign up as Driver</h2>
          </div>
        </div>

        <div className="right-section">
          <form className="form-box" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter the name"
            />

            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <label htmlFor="license">Driver License</label>
            <input
              type="text"
              id="license"
              name="license"
              value={formData.license}
              onChange={handleChange}
              placeholder="Enter driver license number"
            />

            <label htmlFor="eligible">
              <input
                type="checkbox"
                id="eligible"
                name="eligible"
                checked={formData.eligible}
                onChange={handleChange}
              />
              I am eligible to drive
            </label>

            <button type="submit">Sign up as Driver</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupDriver;
