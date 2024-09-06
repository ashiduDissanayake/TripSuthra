import { useNavigate } from 'react-router-dom';

const SignupMenuModified = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    navigate(`/signup/${role}`);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column', // Stack top and bottom
      }}
    >
      {/* Top Side - Background Image */}
      <div
        style={{
          height: '60%', // 60% of the height for the background image
          backgroundImage: `url('/public/signupmenu.jpg')`, // Replace with actual image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Slight darkening of background image
          }}
        ></div>
        {/* Signup as Text */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'White',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '50px', // Increased font size
            fontWeight: 'semibold',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
            letterSpacing: '1px', // Added letter spacing for style
          }}
        >
          Signup as
        </div>
      </div>

      {/* Bottom Side - Content */}
      <div
        style={{
          height: '40%', // 40% of the height for the content
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F4F6EF',
          padding: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Added shadow
          borderTop: '2px solid #ddd', // Optional border for separation
          position: 'relative', // For absolute positioning of the logo
        }}
      >
        {/* Buttons in a Horizontal Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '70%', // Increased width to make buttons wider
          }}
        >
          <button
            style={{
              backgroundColor: '#087E8B', // Teal color
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              border: 'none',
              padding: '25px 80px', // Increased padding for larger buttons
              fontSize: '18px',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Stronger shadow for more depth
              margin: '0 5px', // Added margin for spacing between buttons
            }}
            onClick={() => handleRoleSelection('traveler')}
          >
            Traveler
          </button>

          <button
            style={{
              backgroundColor: '#087E8B', // Teal color
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              border: 'none',
              padding: '25px 80px', // Increased padding for larger buttons
              fontSize: '18px',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Stronger shadow for more depth
              margin: '0 5px', // Added margin for spacing between buttons
            }}
            onClick={() => handleRoleSelection('driver')}
          >
            Driver
          </button>

          <button
            style={{
              backgroundColor: '#087E8B', // Teal color
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              border: 'none',
              padding: '25px 80px', // Increased padding for larger buttons
              fontSize: '18px',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Stronger shadow for more depth
              margin: '0 5px', // Added margin for spacing between buttons
            }}
            onClick={() => handleRoleSelection('guide')}
          >
            Guide
          </button>
        </div>

        {/* Logo Positioned at the Bottom Left */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
          }}
        >
          <img
            src="11.png" // Replace with actual logo URL
            alt="TripSuthra Logo"
            style={{ width: '120px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupMenuModified;
