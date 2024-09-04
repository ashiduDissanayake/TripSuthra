import React from 'react'

const SignIn = () => {
  return (
    <>
        <style>{`
        body {
            font-family: "Poppins-ExtraBold", Helvetica;;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
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
          margin-top: 4px;
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
            border-top-left-radius: 45px; /* Curve top-left corner */
            border-bottom-left-radius: 45px; /* Curve bottom-left corner */
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
            border: 1px solid rgba(50, 125, 129, 0.30);
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
            margin-top: 15px;
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
          padding:0 0 10px 0;
        }


        .txt5, .txt6{
          padding:0 0 0px 0;
        }

        .txt1{
          padding:10px 0 0 0;
        }

        .txt2{
          padding:20px 0 0 0;
        }

        .txt5,.txt6{
          color: #000;
          font-family:  "Poppins-ExtraBold", Helvetica;;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        .txt7{
        
          background-color:#3A5B22;
        }

        .name,.email,.password,.cpassword{
          outline: none;
          border-radius: 20px;
        }
      `}</style>
      
      <div className="container">
        <div className="image-container2">
            <img src="11.png" alt="logo" />
        </div>
        <div className="login-form">
          <p className="txt3">Get start now</p>
          <form>
            <label htmlFor="name" className="txt5">Name</label>
            <input className="name" type="text" id="name" name="name" required placeholder="Enter the name"/>

            <label htmlFor="email" className="txt6">Email address</label>
            <input className="email" type="email" id="email" name="email" required placeholder="Enter your email"/>

            <label htmlFor="password" className="txt6">Password</label>
            <input className="password" type="password" id="password" name="password" required placeholder="Enter password"/>

            <label htmlFor="cpassword" className="txt6">Confirm Password</label>
            <input className="cpassword" type="password" id="cpassword" name="cpassword" required placeholder="Enter password"/>

            <div className="options">
              <label>
                <input type="checkbox" name="remember" /> I agree to the terms & Policy
              </label>
            </div>

            <button type="submit" className="txt7">Sign up</button>
            <p className="txt1">or</p>
            <div className="button-container">
              <div>
                  <button type="submit" className="btn1">
                  <img src="google.png" alt="Icon 1" className="icon"/>&nbsp;&nbsp;
                  <span className="btn-text">Sign in with Google</span>
                  </button>
              </div>
              <div>
                  <button type="submit" className="btn2">
                  <img src="apple2.png" alt="Icon 1" className="icon"/>&nbsp;&nbsp;
                  <span className="btn-text">Sign in with Apple</span>
                  </button>

              </div>
            </div>
            <p className="txt2">Have an account ?  <a href="#">log in</a></p>
          </form>
          
        </div>
        <div className="image-section">
          <div className="image-container">
            <img src="signin.jpg" alt="Coastal Scene" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn