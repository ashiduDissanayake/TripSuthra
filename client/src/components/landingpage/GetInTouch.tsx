import React from 'react';
import { CSSProperties } from 'react';

// Define the styles for the section
const getInTouchSectionStyles: CSSProperties = {
  padding: '50px 0',
  textAlign: 'center',
};

const headingStyles: CSSProperties = {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const formStyles: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'left',
};

const inputStyles: CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ced4da',
};

const textareaStyles: CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ced4da',
  gridColumn: 'span 2',
};

const buttonStyles: CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#087E8B',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  gridColumn: 'span 2',
};

// Get In Touch component
const GetInTouch: React.FC = () => {
  return (
    <section style={getInTouchSectionStyles}>
      <h2 style={headingStyles}>Get In Touch</h2>
      <form style={formStyles}>
        <input type="text" placeholder="Your Name" style={inputStyles} />
        <input type="email" placeholder="Your Email" style={inputStyles} />
        <input type="text" placeholder="Subject" style={inputStyles} />
        <textarea placeholder="Message" style={textareaStyles}></textarea>
        <button type="submit" style={buttonStyles}>Subscribe</button>
      </form>
    </section>
  );
};

export default GetInTouch;
