import React from 'react';
import { useNavigate } from 'react-router-dom'; // Corrected for react-router-dom v6 and above
import { CSSProperties } from 'react';

// Define styles for the component
const containerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px',
  borderRadius: '10px',
  backgroundColor: '#f8f9fa',
  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
};

const textContainerStyles: CSSProperties = {
  flex: 1,
};

const servicesTextStyles: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '22px',
};

const descriptionStyles: CSSProperties = {
  fontSize: '16px',
  marginTop: '10px',
};

const optionsContainerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginLeft: '30px',
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
};

const optionHoverStyles: CSSProperties = {
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#eaf5f3',
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

// Services component
const ServicesCard: React.FC = () => {
  const navigate = useNavigate(); // Updated hook for navigation

  // Define options data
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
    navigate(link); // Updated to use navigate
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
            style={{ ...optionStyles }}
            onClick={() => handleClick(option.link)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#eaf5f3')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#fff')
            }
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
