import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';

const containerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px',
  margin: '0 auto', // Center the container horizontally
  borderRadius: '10px',
  backgroundColor: '#f8f9fa',
  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  maxWidth: '1200px', // Add a maximum width to the container
};

const textContainerStyles: CSSProperties = {
  flex: 1,
  marginRight: '40px', // Add some spacing between the text and options
};

const servicesTextStyles: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '40px',
};

const descriptionStyles: CSSProperties = {
  fontSize: '20px',
  marginTop: '10px',
};

const optionsContainerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  flex: 1, // Make the options container take up the remaining space
};

const optionStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  padding: '15px',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: '#fff',
  transform: 'scale(1)',
};

const optionHoverStyles: CSSProperties = {
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#eaf5f3',
  transform: 'scale(1.05)',
};

const iconStyles: CSSProperties = {
  fontSize: '24px',
  color: '#00695c',
};

const titleStyles: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#00695c',
};

const ServicesCard: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const options = [
    {
      title: 'Plan with Traveller.ai',
      description:
        'With a single click, you are able to find the best trip that suits your needs powered by AI technology.',
      icon: '🚶‍♂️',
      link: '/plan-ai',
    },
    {
      title: 'Book with Book Me',
      description: 'Find and book the best trips tailored for you.',
      icon: '📅',
      link: '/book',
    },
    {
      title: 'Hire with Hire Me',
      description: 'Hire services easily for a smoother travel experience.',
      icon: '🗓️',
      link: '/hire',
    },
  ];

  const handleClick = (link: string) => {
    navigate(link);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={containerStyles}>
      <div style={textContainerStyles}>
        <p style={servicesTextStyles}>Services</p>
        <p style={descriptionStyles}>Our top value categories for you</p>
      </div>
      <div style={optionsContainerStyles}>
        {options.map((option, index) => (
          <div
            key={index}
            style={{
              ...optionStyles,
              ...((index === hoveredIndex) ? optionHoverStyles : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(option.link)}
          >
            <span style={iconStyles}>{option.icon}</span>
            <div>
              <h3 style={titleStyles}>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;