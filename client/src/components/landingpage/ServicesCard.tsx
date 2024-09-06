import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';

const containerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '40px',
  margin: '50px 100px',
  borderRadius: '20px',
  backgroundColor: '#F9FAFB',
  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
};

const textContainerStyles: CSSProperties = {
  flex: 1,
  marginRight: '50px',
};

const servicesTextStyles: CSSProperties = {
  fontFamily: 'Expletus Sans',
  fontWeight: 'bold',
  fontSize: '48px',
  color: '#333',
};

const descriptionStyles: CSSProperties = {
  fontSize: '42px',
  marginTop: '10px',
  color: '#555',
};

const descriptionStyles2: CSSProperties = {
  fontSize: '56px',
  marginTop: '10px',
  fontWeight: 'bold',
  color: '#222',
};

const optionsContainerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  flex: 1,
};

const optionStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  borderRadius: '15px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  backgroundColor: '#fff',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
};

const optionHoverStyles: CSSProperties = {
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  backgroundColor: '#dfeff6',
  transform: 'translateY(-5px)',
};

const iconStyles: CSSProperties = {
  fontSize: '28px',
  color: '#00796b',
};

const titleStyles: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '20px',
  color: '#00796b',
};

const hiddenDescriptionStyles: CSSProperties = {
  fontSize: '16px',
  marginTop: '10px',
  color: '#333',
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'max-height 0.4s ease, padding 0.4s ease',
};

const visibleDescriptionStyles: CSSProperties = {
  maxHeight: '100px', // adjust this value based on your description length
  padding: '10px 0',
};

const ServicesCard: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const options = [
    {
      title: 'Plan with Traveller.ai',
      description: 'With a single click, you are able to find the best trip that suits your needs powered by AI technology.',
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
        <p style={descriptionStyles}>Our top value</p>
        <p style={descriptionStyles2}>Categories for you</p>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={iconStyles}>{option.icon}</span>
              <h3 style={titleStyles}>{option.title}</h3>
            </div>
            <div
              style={{
                ...hiddenDescriptionStyles,
                ...(hoveredIndex === index ? visibleDescriptionStyles : {}),
              }}
            >
              {option.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
