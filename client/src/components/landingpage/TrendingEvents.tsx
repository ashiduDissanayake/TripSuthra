import React, { useRef, useState, useEffect } from "react";
import { CSSProperties } from "react";
import axios from "axios";
import EventDetailModal from "./EventDetailModal"; // Adjust the import path as necessary

interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  reviews: number;
  distance: string;
  description: string;
  rating: number;
}

const sectionStyles: CSSProperties = {
  padding: "40px 20px",
  backgroundColor: "#1e1e2f",
  color: "#000000",
};

const titleStyles: CSSProperties = {
  marginBottom: "30px",
  fontSize: "36px",
  fontWeight: "bold",
  fontFamily: '"Expletus Sans", sans-serif',
  textAlign: "left",
  color: "#ffc107",
};

const gridContainerStyles: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  padding: "20px 0",
};

const eventCardStyles: CSSProperties = {
  position: "relative",
  backgroundColor: "#2c2c3a",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const eventCardHoverStyles: CSSProperties = {
  transform: "scale(1.05)",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
};

const eventImageContainerStyles: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
};

const eventImageStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
};

const eventInfoStyles: CSSProperties = {
  padding: "15px",
  color: "#e0e0e0",
  textAlign: "left",
};

const eventTitleStyles: CSSProperties = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#ffc107",
};

const reviewStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  fontSize: "14px",
  color: "#ffc107",
};

const starStyles: CSSProperties = {
  color: "#f39c12",
  marginRight: "5px",
};

const distanceStyles: CSSProperties = {
  color: "#b0b0b0",
  marginTop: "5px",
};

const favoriteIconStyles: CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
  fontSize: "24px",
  color: "#ffc107",
  transition: "transform 0.3s ease, color 0.3s ease",
};

const buttonBaseStyles: CSSProperties = {
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px 20px",
  backgroundColor: "#ffc107",
  color: "#2c2c3a",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  fontWeight: "bold",
  display: "none",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  zIndex: 1,
};

const buttonHoverStyles: CSSProperties = {
  backgroundColor: "#fffff",
  transform: "translateX(-50%) scale(1.1)",
};

const TrendingEvents: React.FC = () => {
  const [eventsData, setEventsData] = useState<EventData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [favoriteIndexes, setFavoriteIndexes] = useState<number[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/event/trending-events");
        console.log("Fetched events:", response.data); // Add this line
        setEventsData(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const openModal = (event: EventData) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const toggleFavorite = (index: number) => {
    setFavoriteIndexes((prevFavorites) =>
      prevFavorites.includes(index)
        ? prevFavorites.filter((favIndex) => favIndex !== index)
        : [...prevFavorites, index]
    );
  };

  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>Trending Events In Sri Lanka</h2>
      <div style={gridContainerStyles}>
        {eventsData.map((event, index) => (
          <div
            key={index}
            style={{
              ...eventCardStyles,
              ...(hoveredIndex === index ? eventCardHoverStyles : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={eventImageContainerStyles}>
              <img
                src={event.imageUrl}
                alt={event.title}
                style={{
                  ...eventImageStyles,
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              />
              <button
                style={{
                  ...buttonBaseStyles,
                  display: hoveredIndex === index ? "block" : "none",
                  ...(hoveredIndex === index ? buttonHoverStyles : {}),
                }}
                onClick={() => openModal(event)}
              >
                View Details
              </button>
            </div>
            <div
              style={{
                ...favoriteIconStyles,
                display:
                  favoriteIndexes.includes(index) || hoveredIndex === index
                    ? "block"
                    : "none",
                color: favoriteIndexes.includes(index) ? "#ff5733" : "#ffffff",
              }}
              onClick={() => toggleFavorite(index)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {favoriteIndexes.includes(index) ? "❤️" : "🤍"}
            </div>

            <div style={eventInfoStyles}>
              <div style={eventTitleStyles}>{event.title}</div>
              <div style={reviewStyles}>
                {Array.from({ length: Math.floor(event.rating) }, (_, i) => (
                  <span key={i} style={starStyles}>
                    ★
                  </span>
                ))}
                {Array.from(
                  { length: 5 - Math.floor(event.rating) },
                  (_, i) => (
                    <span key={i} style={{ ...starStyles, color: "#4b4b4b" }}>
                      ★
                    </span>
                  )
                )}
                {event.reviews} Reviews
              </div>
              <div style={distanceStyles}>{event.distance}</div>
            </div>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <EventDetailModal
          isOpen={isModalOpen}
          onClose={closeModal}
          event={selectedEvent}
        />
      )}
    </section>
  );
};

export default TrendingEvents;
