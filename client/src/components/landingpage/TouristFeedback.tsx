import React from 'react';
import { CSSProperties } from 'react';

// Define the type for the feedback data
interface FeedbackData {
  name: string;
  location: string;
  feedback: string;
  imageUrl: string;
}

// Inline styles for the feedback section
const feedbackSectionStyles: CSSProperties = {
  position: 'relative', // Required for the overlay
  padding: '50px 0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url('/public/hero-bg.jpg')`, // Add your background image URL here
};

const overlayStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
  zIndex: 1,
};

const contentStyles: CSSProperties = {
  position: 'relative', // Position above the overlay
  zIndex: 2,
  textAlign: 'center',
  color: '#fff',
};

const feedbackCardStyles: CSSProperties = {
  backgroundColor: 'rgba(0,0,0,0)',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center items horizontally
};

const touristImageContainerStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center', // Horizontally center the image
  alignItems: 'center', // Vertically center the image
  marginBottom: '15px',
};

const touristImageStyles: CSSProperties = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
};

const nameStyles: CSSProperties = {
  fontWeight: 'bold',
  marginBottom: '26px',
};

const locationStyles: CSSProperties = {
  color: '#6c757d',
  marginBottom: '18px',
};

const feedbackTextStyles: CSSProperties = {
  fontStyle: 'italic',
  fontSize: '18px'
};

const TouristFeedback: React.FC = () => {
  const feedbackData: FeedbackData[] = [
    {
      name: 'John Doe',
      location: 'USA',
      feedback: 'Sri Lanka is an amazing country! I enjoyed every moment.',
      imageUrl: '/public/male1.jpg',
    },
    {
      name: 'Jane Smith',
      location: 'UK',
      feedback: 'The landscapes are breathtaking. Truly a memorable trip!',
      imageUrl: '/public/male2.jpg',
    },
    {
      name: 'Carlos Diaz',
      location: 'Spain',
      feedback: 'The cultural heritage in Sri Lanka is fascinating.',
      imageUrl: '/public/female1.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div style={feedbackSectionStyles}>
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        <h2 style={{ marginBottom: '30px' , fontSize : '36px', fontFamily: '"Expletus Sans", sans-serif',}}>Tourist Feedback</h2>
        <Slider {...settings}>
          {feedbackData.map((tourist, index) => (
            <div key={index}>
              <div style={feedbackCardStyles}>
                <div style={touristImageContainerStyles}>
                  <img src={tourist.imageUrl} alt={tourist.name} style={touristImageStyles} />
                </div>
                <div style={nameStyles}>{tourist.name}</div>
                <div style={locationStyles}>{tourist.location}</div>
                <p style={feedbackTextStyles}>"{tourist.feedback}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TouristFeedback;
