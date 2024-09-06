

const TravelerSignup = () => {
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: `'Poppins', sans-serif`,
      backgroundColor: '#F4F6EF',
      margin: 0,
    },
    signupSection: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px',
      backgroundColor: '#ffffff',
    },
    formContainer: {
      maxWidth: '400px',
      margin: 'auto',
    },
    title: {
      fontFamily: `'Montserrat', sans-serif`,
      fontSize: '36px',
      color: '#13294B',
      marginBottom: '20px',
    },
    formLabel: {
      display: 'block',
      marginBottom: '5px',
      color: '#13294B',
    },
    inputField: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #13294B',
      borderRadius: '5px',
      fontSize: '16px',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    submitBtn: {
      backgroundColor: '#087E8B',
      color: '#ffffff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
      width: '100%',
      transition: 'background-color 0.3s ease',
    },
    altSignup: {
      textAlign: 'center',
      marginTop: '20px',
    },
    altSignupText: {
      color: '#13294B',
    },
    altBtn: {
      backgroundColor: '#ffffff',
      color: '#13294B',
      border: '1px solid #13294B',
      padding: '10px 20px',
      borderRadius: '5px',
      fontSize: '16px',
      margin: '5px',
      cursor: 'pointer',
      width: '48%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginLink: {
      textAlign: 'center',
      marginTop: '20px',
    },
    loginLinkText: {
      color: '#087E8B',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    imageSection: {
      flex: 1,
      backgroundColor: '#13294B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    signupImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
    logoImg: {
      width: '20px',
      marginRight: '10px',
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
          align-items:center
        }

        .name,.passport,.issued-date,.expiry-date{
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
          <p className="txt3">Sign Up as Traveler</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="txt5">Name</label>
            <input className="name" type="text" id="name" name="name" required placeholder="Enter the name"/>

            <label htmlFor="passport" className="txt6">Passport Number</label>
            <input className="passport" type="text" id="passport" name="passport" required placeholder="Enter passport number"/>

            <label htmlFor="issued-date" className="txt6">Passport Issued Date</label>
            <input className="issued-date" type="date" id="issued-date" name="issued-date" required/>

            <label htmlFor="expiry-date" className="txt6">Passport Expiry Date</label>
            <input className="expiry-date" type="date" id="expiry-date" name="expiry-date" required/>

            <div className="options-container">
              <label className="terms-label">
                <input type="checkbox" name="remember" /> I agree to the terms & policy
              </label>

              <button type="submit" className="btn0">Next</button>
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
            <img src="/public/Travelersignup.jpg" alt="Traveler Scene" />
          </div>
        </div>
      </div>
    </>
  );
}
export default TravelerSignUp;
