import React from 'react';
import { CSSProperties } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

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
  fontFamily: '"Expletus Sans", sans-serif',
};

const iconContainerStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '50px',
  marginBottom: '50px',
};

const iconCardStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // This will horizontally center the icon and text
  justifyContent: 'center',
  textAlign: 'center', // Ensures that text inside the card is centered
  padding: '20px',
  backgroundColor: '#f8f9fa',
  
};

const iconStyles: CSSProperties = {
  fontSize: '50px',
  marginBottom: '10px',
  color: '#087E8B',
};

const titleStyles: CSSProperties = {
  fontWeight: 'bold',
  color: '#087E8B',
};

const textStyles: CSSProperties = {
  color: '#087E8B',
};

// Contact Us component
const ContactUs: React.FC = () => {
  return (
    <section style={contactUsSectionStyles}>
      <h2 style={headingStyles}>Contact Us</h2>
      <div style={iconContainerStyles}>
        <div style={iconCardStyles}>
          <span style={iconStyles}><CiLocationOn /></span>
          <h3 style={titleStyles}>Address</h3>
          <p style={textStyles}>NO. 89/1, HIGHLEVEL ROAD, Pannipitiya</p>
        </div>
        <div style={iconCardStyles}>
          <span style={iconStyles}><IoCallOutline /></span>
          <h3 style={titleStyles}>Contact Number</h3>
          <p style={textStyles}>+94-11-2851866</p>
        </div>
        <div style={iconCardStyles}>
          <span style={iconStyles}><MdOutlineMailOutline /></span>
          <h3 style={titleStyles}>Email Address</h3>
          <p style={textStyles}>tripsuthra@gmail.com</p>
        </div>
        <div style={iconCardStyles}>
          <span style={iconStyles}><TbWorld /></span>
          <h3 style={titleStyles}>Web Site</h3>
          <p style={textStyles}>TripSuthra.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
