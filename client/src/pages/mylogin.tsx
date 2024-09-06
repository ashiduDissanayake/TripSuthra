import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../redux/store"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        // Save token to local storage or context
        localStorage.setItem("token", response.data.token);
        // Dispatch login action
        dispatch(login({ email }));
        // Redirect or show a success message
        alert("Login successful!");
        navigate("/"); // Redirect on successful signup
      } else {
        // Handle login failure
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: "Poppins-ExtraBold", Helvetica;;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: end;
            align-items: center;
            height: 100vh;
            width: 100vw;
            background-color: #fff;
            overflow: hidden; /* Prevent scrolling */
        }

        .button-container {
            display: inline-flex;
            gap: 10px; /* Adjust the gap between buttons as needed */
            justify-content: space-between;
        }
          .login-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f3f4f6; /* bg-gray-100 */
          }
          .login-box {
            display: flex;
            flex-direction: column;
            padding-right:100px;
            padding: 150px;
          }
          .login-title {
            font-size: 1.5rem; /* text-2xl */
            font-weight: bold;
            margin-bottom: 1.5rem; /* mb-6 */
          }
          .input-label {
            display: block;
            font-size: 0.875rem; /* text-sm */
            font-weight: 500; /* font-medium */
            color: #4b5563; /* text-gray-700 */
          }
          .input-field {
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
          }
          .input-field:focus {
            border-color: #6366f1; /* focus:border-indigo-500 */
            box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.5); /* focus:ring-indigo-500 */
          }
          .submit-button {
            display: inline-flex;
            justify-content: center;
          align-items: center;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #087E8B;
          color: #fff;
          border-radius: 30px;
          margin-top: 25px;
          float:right;
          }
          .submit-button:hover {
            background-color: #fff; /* hover:bg-indigo-700 */
            border: 1px solid #d1d5db;
            color: #087E8B;
          }
          .submit-button:focus {
            box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.5); /* focus:ring-indigo-500 */
          }

          input {
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
            .image-section {
            flex: 1;
            display: flex;
            justify-content: center; /* Center image horizontally */
            align-items: center; /* Center image vertically */
            overflow: hidden; /* Ensure overflow is hidden */
        }

        .image-container {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-top-left-radius: 50px; /* Curve top-left corner */
            border-bottom-left-radius: 50px; /* Curve bottom-left corner */
        }
        .image-container2{
            position: absolute;
            top: 50px; 
            left: 50px; 
            transform: translate(-50%, -50%);
            width:150px;
            height:150px;
            padding: 30px;
        }
          .txt3{
          color: #000;
          font-family:  "Poppins-ExtraBold", Helvetica;;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          padding:0 0 25px 0;
        }

        .txt4{
          padding:0 0 25px 0;
        }

        .txt5, .txt6{
          padding:0 0 15px 0;
        }

        .txt1{
          padding:15px 0 15px 0;
          display: flex;
            justify-content: center; /* Center image horizontally */
            align-items: center;
        }

        .txt2{
          padding:20px 0 0 0;
        }

        .txt4,.txt5,.txt6{
          color: #000;
          font-family:  "Poppins-ExtraBold", Helvetica;;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
          .fPassword{
          color: rgba(58, 91, 34, 0.89);
          font-family: "Poppins-ExtraBold", Helvetica;;
          font-size: 12px;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
        }
          .icon{
          width:15px;
          height:15px;
        }

        .btn2{
          float:right;
        }

         .btn1, .btn2 {
          
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #fff;
          color: black;
          border-radius: 30px;
          border:0.5px solid black;
        }

        .email, .password{
          outline: none;
          border-radius: 20px;
          border: white;
        }

        a {
            color: #007BFF;
            text-decoration: none;
        }

        a:hover {
            text-decoration: none;
        }

        .options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
        }

        form {
            display: flex;
            flex-direction: column;
            padding-right:100px;
        }
        `}
      </style>

      <div className="login-container">
        <div className="image-container2">
          <img src="11.png" alt="logo" />
        </div>
        <div className="login-box">
          <p className="txt3">Welcome back!</p>
          <p className="txt4"> Enter your credentials to access your account.</p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <a href="#" className="fPassword">Forgot your password?</a>
            </div>

            <button type="submit" className="submit-button">
              Login
            </button>
            <p className="txt1">or</p>
            <div className="button-container">
              <div>
                <button type="button" className="btn1">
                  <img src="google.png" alt="Icon 1" className="icon" />&nbsp;&nbsp;
                  <span className="btn-text">Login with Google</span>
                </button>
              </div>
              <div>
                <button type="button" className="btn2">
                  <img src="apple2.png" alt="Icon 1" className="icon" />&nbsp;&nbsp;
                  <span className="btn-text">Login with Apple</span>
                </button>
              </div>
            </div>
            <p className="txt2">Don't have an account? <a href="#">Sign up now</a></p>
          </form>
        </div>
        <div className="image-section">
          <div className="image-container">
            <img src="pic1.jpg" alt="Coastal Scene" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
