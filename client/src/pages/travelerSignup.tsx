
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
    <div style={styles.container}>
      <div style={styles.signupSection}>
        <div style={styles.formContainer}>
          <p style={styles.title}>Get Started Now</p>
          <form>
            <label htmlFor="name" style={styles.formLabel}>Name</label>
            <input style={styles.inputField} type="text" id="name" name="name" required placeholder="Enter the name" />

            <label htmlFor="email" style={styles.formLabel}>Email address</label>
            <input style={styles.inputField} type="email" id="email" name="email" required placeholder="Enter your email" />

            <label htmlFor="passport_number" style={styles.formLabel}>Passport Number</label>
            <input style={styles.inputField} type="text" id="passport_number" name="passport_number" required placeholder="Enter passport number" />

            <label htmlFor="passport_issued_date" style={styles.formLabel}>Passport Issued Date</label>
            <input style={styles.inputField} type="date" id="passport_issued_date" name="passport_issued_date" required />

            <label htmlFor="passport_expiry_date" style={styles.formLabel}>Passport Expiry Date</label>
            <input style={styles.inputField} type="date" id="passport_expiry_date" name="passport_expiry_date" required />

            <div style={styles.checkboxContainer}>
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms"> I agree to the terms & policy</label>
            </div>

            <button type="submit" style={styles.submitBtn}>Sign Up</button>
          </form>

          <div style={styles.altSignup}>
            <p style={styles.altSignupText}>Or sign up with</p>
            <button style={styles.altBtn}>
              <img src="google-logo.png" alt="Google" style={styles.logoImg} />
              Google
            </button>
            <button style={styles.altBtn}>
              <img src="apple-logo.png" alt="Apple" style={styles.logoImg} />
              Apple
            </button>
          </div>

          <p style={styles.loginLink}>
            Have an account? <a href="/login" style={styles.loginLinkText}>Log in</a>
          </p>
        </div>
      </div>
      <div style={styles.imageSection}>
        <img src="traveler-signup.jpg" alt="Traveler" style={styles.signupImage} />
      </div>
    </div>
  );
};

export default TravelerSignup;
