import React, { CSSProperties } from 'react';
import HeroSearchBar from './HeroSearchBar'; // Import the Airbnb-like search bar

// Inline styles typed correctly
const heroStyles: CSSProperties = {
  height: '100vh',
  backgroundImage: "url('/public/hero-bg-1.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column', // Added this to stack the content vertically
};

const heroContentStyles: CSSProperties = {
  textAlign: 'center',
  color: 'white',
};

const headingStyles: CSSProperties = {
  fontSize: '3.5rem',
  marginBottom: '20px',
  marginTop: '300px',
  fontFamily: '"Expletus Sans", sans-serif',
  fontWeight: '500',
};

function HeroSection() {
  return (
    <section style={heroStyles}>
      <div style={heroContentStyles}>
        <h1 style={headingStyles}>Travel further. Travel longer.<br></br> Travel deeper.</h1>
        {/* Replace the old input and button with the HeroSearchBar */}
        <HeroSearchBar />
      </div>
    </section>
  );
}

export default HeroSection;
