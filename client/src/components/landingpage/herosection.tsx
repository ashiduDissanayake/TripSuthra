import React, { CSSProperties } from 'react';

// Inline styles typed correctly
const heroStyles: CSSProperties = {
  height: '100vh',
  backgroundImage: "url('/public/hero-bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const heroContentStyles: CSSProperties = {
  textAlign: 'center',
  color: 'white',
};

const headingStyles: CSSProperties = {
  fontSize: '3rem',
  marginBottom: '20px',
};

const inputStyles: CSSProperties = {
  padding: '10px',
  marginRight: '10px',
  border: 'none',
  borderRadius: '5px',
  width: '300px',
};

const buttonStyles: CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const buttonHoverColor: string = '#0056b3'; // Hover color as string

function HeroSection() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = buttonHoverColor;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor as string; // Ensure it's a string
  };

  return (
    <section style={heroStyles}>
      <div style={heroContentStyles}>
        <h1 style={headingStyles}>Travel further. Travel longer. Travel deeper.</h1>
        <input type="text" placeholder="Search your next destination..." style={inputStyles} />
        <button
        
          style={buttonStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
