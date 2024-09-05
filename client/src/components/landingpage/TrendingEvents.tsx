import React, { useRef, useState, MouseEvent } from "react";
import { CSSProperties } from "react";
import EventDetailModal from "./EventDetailModal"; // Adjust the import path as necessary

// Define the type for the event data
interface EventData {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  reviews: number;
  distance: string;
  description: string;
  rating: number;
}

// Styles for the section and title
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

// Grid container styles for better layout control
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

// Trending Events component
const TrendingEvents: React.FC = () => {
  const eventsData: EventData[] = [
    {
      title: "Esala Perahera",
      date: "August 12, 2024",
      location: "Kandy",
      imageUrl: "/public/esala.jpg",
      reviews: 480,
      distance: "187 Kilometers away",
      description:
        "Esala Perahera is an annual Buddhist festival held in Kandy, Sri Lanka, to honor the sacred tooth relic of Lord Buddha. It is one of the most colorful and significant religious events in the country, featuring a grand procession with beautifully adorned elephants, traditional dancers, drummers, and fire performers. The highlight of the festival is the majestic elephant carrying a replica of the sacred tooth relic through the streets. The event usually lasts for ten days in July or August, symbolizing devotion and showcasing Sri Lankan culture and heritage.",
      rating: 4.5,
    },
    {
      title: "Nallur Festival",
      date: "October 5, 2024",
      location: "Galle",
      imageUrl: "/public/nallur.jpg",
      reviews: 320,
      distance: "90 Kilometers away",
      description:
        "The Nallur Festival, held annually in Jaffna, Sri Lanka, is a vibrant and significant Hindu celebration dedicated to Lord Murugan, a popular deity in Tamil culture. This festival, also known as the Nallur Kandaswamy Kovil Festival, typically takes place over 25 days in August or September. It features a blend of religious rituals, cultural performances, and colorful processions.Devotees participate in various ceremonies, including elaborate processions with decorated chariots, traditional music, and dance. The festival's highlight is the grand procession of the deity's chariot through the streets, accompanied by enthusiastic devotees, who often undertake vows and penances as part of their devotion. The Nallur Festival is a time of community bonding, showcasing Tamil cultural heritage and religious fervor.",
      rating: 3.0,
    },
    {
      title: "Madhu Festival",
      date: "August 12, 2024",
      location: "Kandy",
      imageUrl: "/public/madhu.jfif",
      reviews: 480,
      distance: "187 Kilometers away",
      description: "A vibrant Hindu festival in Galle.",
      rating: 4.0,
    },
    {
      title: "Arugam Bay Surfing",
      date: "October 5, 2024",
      location: "Galle",
      imageUrl: "/public/arugambay.jfif",
      reviews: 320,
      distance: "90 Kilometers away",
      description: "A vibrant Hindu festival in Galle.",
      rating: 4.0,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [favoriteIndexes, setFavoriteIndexes] = useState<number[]>([]);

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
                color: favoriteIndexes.includes(index) ? "#ff5733" : "#ffffff", // Red if favorite
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
