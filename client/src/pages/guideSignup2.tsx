import React, { useState } from 'react';

const mockUniqueUsernames = ['john123', 'susan99', 'mike2020']; // Mock list of taken usernames for uniqueness check

const UserSignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateUsername = () => {
    if (mockUniqueUsernames.includes(username)) {
      setUsernameError('Username is already taken');
      return false;
    }
    setUsernameError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isPasswordValid = validatePassword();
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (isPasswordValid && isUsernameValid && isEmailValid) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <>
      <style>{`
        body {
            font-family: "Poppins-ExtraBold", Helvetica;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: end;
            align-items: center;
            height: 100vh;
            width: 100vw;
            background-color: #fff;
            overflow: hidden;
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
          border: 0.5px solid black;
        }

        .icon{
          width:15px;
          height:15px;
        }

        .button-container {
            display: inline-flex;
            gap: 10px; 
            justify-content: space-between;
        }

        .image-container2{
          width:120px;
          height:120px;
        }

        .container {
            display: flex;
            width: 100vw;
            height: 100vh;
        }

        .login-form {
            padding: 20px;
            padding-top:80px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .image-section {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
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
            border-top-left-radius: 45px;
            border-bottom-left-radius: 45px;
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

        .options-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .terms-label {
          font-size: 14px;
          display: flex;
          align-items: center;
        }

        .btn0 {
          margin-left: 20px;
          padding: 10px;
          color: #fff;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          background-color: #00796b;
          width: 100px;
          align-self: flex-end;
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
          font-family:  "Poppins-ExtraBold", Helvetica;
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
          font-family:  "Poppins-ExtraBold", Helvetica;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        .txt7{
          background-color: #3A5B22;
        }

        .name,.email,.password,.confirm-password{
          outline: none;
          border-radius: 20px;
        }

        .error {
            color: red;
            margin-top: 5px;
        }
      `}</style>

      <div className="container">
        <div className="image-container2">
            <img src="/public/11.png" alt="logo" />
        </div>
        <div className="login-form">
          <p className="txt3">Sign Up as Guide</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="txt5">Username</label>
            <input
              className="name"
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter a unique username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <div className="error">{usernameError}</div>}

            <label htmlFor="email" className="txt6">Email</label>
            <input
              className="email"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error">{emailError}</div>}

            <label htmlFor="password" className="txt6">Password</label>
            <input
              className="password"
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirm-password" className="txt6">Confirm Password</label>
            <input
              className="confirm-password"
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passwordError && <div className="error">{passwordError}</div>}

            <div className="options-container">
              <label className="terms-label">
                <input type="checkbox" name="terms" required /> I am a certified guide
              </label>

              <button type="submit" className="btn0">Submit</button>
            </div>

            <p className="txt1">or</p>
            <div className="button-container">
              <div>
                  <button type="submit" className="btn1">
                  <img src="/public/google.png" alt="Icon 1" className="icon"/>&nbsp;&nbsp;
                  <span className="btn-text">Sign in with Google</span>
                  </button>
              </div>
              <div>
                  <button type="submit" className="btn2">
                  <img src="/public/apple2.png" alt="Icon 1" className="icon"/>&nbsp;&nbsp;
                  <span className="btn-text">Sign in with Apple</span>
                  </button>
              </div>
            </div>
            <p className="txt2">Have an account? <a href="#">log in</a></p>
          </form>
        </div>
        <div className="image-section">
          <div className="image-container">
            <img src="/public/Girl.jpg" alt="Signup Scene" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignUp;
