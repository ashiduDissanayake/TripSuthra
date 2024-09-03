import React from 'react';
import { CSSProperties } from 'react';

// Define the styles for the section
const contactUsSectionStyles: CSSProperties = {
  padding: '50px 0',
  textAlign: 'center',
  backgroundColor: '#f8f9fa',
};

const headingStyles: CSSProperties = {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const iconContainerStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '50px',
  marginBottom: '50px',
};

const iconCardStyles: CSSProperties = {
  textAlign: 'center',
};

const iconStyles: CSSProperties = {
  fontSize: '50px',
  marginBottom: '10px',
};

const titleStyles: CSSProperties = {
  fontWeight: 'bold',
<<<<<<< Updated upstream
  color: '#087E8B',
};

const textStyles: CSSProperties = {
  color: '#087E8B',
=======
  color: '#00695c',
};

const textStyles: CSSProperties = {
  color: '#6c757d',
>>>>>>> Stashed changes
};

// Contact Us component
const ContactUs: React.FC = () => {
  return (
    <section style={contactUsSectionStyles}>
      <h2 style={headingStyles}>Contact Us</h2>
      <div style={iconContainerStyles}>
        <div style={iconCardStyles}>
          <span style={iconStyles}>📍</span>
          <h3 style={titleStyles}>Address</h3>
          <p style={textStyles}>NO. 89/1, HIGHLEVEL ROAD, Pannipitiya</p>
        </div>
        <div style={iconCardStyles}>
          <span style={iconStyles}>📞</span>
          <h3 style={titleStyles}>Contact Number</h3>
          <p style={textStyles}>+94-11-2851866</p>
        </div>
        <div style={iconCardStyles}>
          <span style={iconStyles}>✉️</span>
          <h3 style={titleStyles}>Email Address</h3>
          <p style={textStyles}>tripsuthra@gmail.com</p>
        </div>
        <div style={iconCardStyles}>
          <span style={iconStyles}>🌐</span>
          <h3 style={titleStyles}>Web Site</h3>
          <p style={textStyles}>TripSuthra.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
