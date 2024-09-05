import React from "react";
import { useNavigate } from "react-router-dom"; // Corrected for react-router-dom v6 and above
import { CSSProperties } from "react";

// Define styles for the component
const containerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center", // Center the content horizontally
  padding: "50px", // Add padding to the section
  margin: "50px", // Add margin to the section
  backgroundColor: "#f8f9fa", // Set background color for section
};

const cardStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "80%", // Set a fixed width for the card
  padding: "40px",
  borderRadius: "20px", // Increase the border-radius for a card-like look
  backgroundColor: "#fff",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)", // Increase shadow for a card effect
};

const textContainerStyles: CSSProperties = {
  flex: 1,
};

const servicesTextStyles: CSSProperties = {
  fontWeight: "bold",
  fontSize: "28px", // Increase the font size for the title
  marginBottom: "10px", // Add margin for spacing
};

const descriptionStyles: CSSProperties = {
  fontSize: "18px", // Adjust font size for subtitle
  color: "#6c757d", // Subtle text color
};

const optionsContainerStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  flex: 2,
};

const optionStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "20px",
  borderRadius: "12px", // Rounded corners for options
  cursor: "pointer",
  transition: "all 0.3s ease",
  backgroundColor: "#f1f1f1",
  boxShadow: "0 5px 10px rgba(0,0,0,0.05)",
};

const iconStyles: CSSProperties = {
  fontSize: "28px", // Larger icon size
  color: "#00695c", // Consistent color for icons
};

const titleStyles: CSSProperties = {
  fontWeight: "bold",
  fontSize: "20px", // Increased font size for the title
  color: "#00695c",
};

const Services: React.FC = () => {
  const navigate = useNavigate();

  // Define options data
  const options = [
    {
      title: "Plan with Traveller.ai",
      description:
        "With a single click, you are able to find the best trip that suits your needs powered by AI technology.",
      icon: "🚶‍♂️",
      link: "/plan-ai",
    },
    {
      title: "Book with Book Me",
      description: "Find and book the best trips tailored for you.",
      icon: "📅",
      link: "/book",
    },
    {
      title: "Hire with Hire Me",
      description: "Hire services easily for a smoother travel experience.",
      icon: "🗓️",
      link: "/hire",
    },
  ];

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#eaf5f3";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f1f1";
                e.currentTarget.style.boxShadow = "0 5px 10px rgba(0,0,0,0.05)";
              }}
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
    </div>
  );
};

export default Services;
