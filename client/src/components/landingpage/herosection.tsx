import React, { CSSProperties } from 'react';
import HeroSearchBar from './HeroSearchBar'; // Import the Airbnb-like search bar

// Inline styles typed correctly
const heroStyles: CSSProperties = {
  height: '92vh',
  position: 'relative', // Position relative to allow absolute positioning for overlay
  backgroundImage: "url('/public/hero-bg-1.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column', // Added this to stack the content vertically
};

const overlayStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay with 50% opacity
  zIndex: 0, // Behind the content but on top of the background image
};

const heroContentStyles: CSSProperties = {
  textAlign: '-webkit-match-parent',
  color: 'white',
  zIndex: 1, // Above the overlay
};

const headingStyles: CSSProperties = {
  fontSize: '4rem',
  fontWeight: "bold",
  marginBottom: '20px',
  marginTop: '170px',
  fontFamily: '"Expletus Sans", sans-serif',
  marginRight: '320px', 
};

function HeroSection() {
  return (
    <section style={heroStyles}>
      {/* Overlay div */}
      <div style={overlayStyles}></div>
      
      {/* Content div */}
      <div style={heroContentStyles}>
        <h1 style={headingStyles}>
          Travel further. Travel longer.<br /> Travel deeper.
        </h1>
        {/* Replace the old input and button with the HeroSearchBar */}
        <HeroSearchBar />
      </div>
    </section>
  );
}

export default HeroSection;
