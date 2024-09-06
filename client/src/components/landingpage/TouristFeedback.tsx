import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Define the type for the feedback data
interface FeedbackData {
  name: string;
  location: string;
  feedback: string;
  imageUrl: string;
}

// Inline styles for the feedback section
const feedbackSectionStyles: React.CSSProperties = {
  position: "relative",
  padding: "80px 200px",
  backgroundColor: "#000",
  overflow: "hidden",
  color: "#fff",
  textAlign: "center",
};

const videoStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "150vh",
  objectFit: "cover",
};

const overlayStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 1,
};

const contentStyles: React.CSSProperties = {
  position: "relative",
  zIndex: 2,
  padding: "20px",
};

const sliderContainerStyles: React.CSSProperties = {
  position: "relative",
  zIndex: 2,
};

const feedbackCardStyles: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.2)", // Glassmorphism effect
  backdropFilter: "blur(10px)",
  padding: "40px 0",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  transform: "scale(0.95)",
  opacity: 0.9,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const feedbackCardHoverStyles: React.CSSProperties = {
  transform: "scale(1)",
  opacity: 1,
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
};

const touristImageStyles: React.CSSProperties = {
  width: "150px",
  height: "150px",
  borderRadius: "8px",
  border: "5px solid #fff",
  objectFit: "cover",
  marginBottom: "15px",
};

const nameStyles: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const locationStyles: React.CSSProperties = {
  fontSize: "16px",
  color: "#ddd",
  marginBottom: "15px",
};

const feedbackTextStyles: React.CSSProperties = {
  fontSize: "18px",
  fontStyle: "italic",
  lineHeight: "1.5",
};

const TouristFeedback: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackData[]>([]);

  useEffect(() => {
    // Fetch feedback from the backend
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/feedback/get-feedbacks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // If you have auth
          },
        });

        const result = await response.json();
        if (result.success) {
          setFeedbackData(result.data);
        } else {
          console.error("Error fetching feedback:", result.message);
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div style={feedbackSectionStyles}>
      <video autoPlay muted loop style={videoStyles}>
        <source src="/public/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "40px",
            fontFamily: '"Expletus Sans", sans-serif',
          }}
        >
          Tourist Feedback
        </h2>
        <div style={sliderContainerStyles}>
          <Slider {...settings}>
            {feedbackData.map((tourist, index) => (
              <div key={index}>
                <div
                  style={{
                    ...feedbackCardStyles,
                    ":hover": feedbackCardHoverStyles,
                  }}
                >
                  <img
                    src={tourist.imageUrl}
                    alt={tourist.name}
                    style={touristImageStyles}
                  />
                  <div style={nameStyles}>{tourist.name}</div>
                  <div style={locationStyles}>{tourist.location}</div>
                  <p style={feedbackTextStyles}>"{tourist.feedback}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TouristFeedback;
