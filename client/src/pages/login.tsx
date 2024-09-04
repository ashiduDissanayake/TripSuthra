import React from 'react';

const LogIn = () => {
  return (
    <>
      <style>{`
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

        .icon{
          width:15px;
          height:15px;
        }
        .button-container {
            display: inline-flex;
            gap: 10px; /* Adjust the gap between buttons as needed */
            justify-content: space-between;
        }

        .image-container2{
          width:120px;
          height:120px;
        }

        .container {
            display: flex;
            width: 100vw; /* Ensure full viewport width */
            height: 100vh; /* Ensure full viewport height */
        }

        .login-form {
            padding: 20px;
            padding-top:80px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center; /* Center content vertically */
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
        .txt1,.txt2{
          text-align:center;
        }

        h1, h2 {
            margin: 0;
        }

        form {
            display: flex;
            flex-direction: column;
            padding-right:100px;
        }

        label {
            margin-top: 10px;
        }

        input {
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
        }

        button {
            padding: 10px;
            margin-top: 20px;
            color: #fff;
            border: none;
            border-radius: 30px;
            cursor: pointer;
        }

        

        a {
            color: #007BFF;
            text-decoration: none;
        }

        a:hover {
            text-decoration: none;
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
          padding:15px 0 0 0;
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

        .txt7{
        
          background-color:#3A5B22;
        }

        .email, .password{
          outline: none;
          border-radius: 20px;
          border: white;
        }
      `}</style>
      
      <div className="container">
        <div className="image-container2">
            <img src="11.png" alt="logo" />
        </div>
        <div className="login-form">
          <p className="txt3">Welcome back!</p>
          <p className="txt4"> Enter your credentials to access your account.</p>
          <form>
            <label htmlFor="email" className="txt5">Email address</label>
            <input className="email" type="email" id="email" name="email" required placeholder="Enter your Email"/>

            <label htmlFor="password" className="txt6">Password</label>
            <input className="password" type="password" id="password" name="password" required placeholder="Password"/>

            <div className="options">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <a href="#" className="fPassword">Forgot your password?</a>
            </div>

            <button type="submit" className="txt7">Log In</button>
            <p className="txt1">or</p>
            <div className="button-container">
              <div>
                  <button type="submit" className="btn1">
                  <img src="google.png" alt="Icon 1" className="icon"/>&nbsp;&nbsp;
                  <span className="btn-text">Login with Google</span>
                  </button>
              </div>
              <div>
                  <button type="submit" className="btn2">
                  <img src="apple2.png" alt="Icon 1" className="icon"/>&nbsp;&nbsp;
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
    </>
  );
}

export default LogIn;
