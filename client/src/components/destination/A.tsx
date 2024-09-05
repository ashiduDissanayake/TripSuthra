import React from 'react';

// Define the props type for the component
interface AProps {
  text: string; // The text to display on the button
  onClick?: () => void; // Optional click handler
  className?: string; // Optional additional class names for styling
  style?: React.CSSProperties; // Optional inline styles
}

// Define the A component
const A: React.FC<AProps> = ({ text, onClick, className, style }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      style={style}
    >
      {text}
    </button>
  );
};

export default A;
