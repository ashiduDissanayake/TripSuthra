import React, { useRef, useState, MouseEvent, useEffect } from "react";
import axios from "axios";
import { CSSProperties } from "react";

// Define the type for the event data
interface EventData {
  eventId: number;
  eventName: string;
  startTime: string;
  endTime: string;
  locationName: string;
  locationArea: string;
  averageRating: number;
  imageUrl: string;
}

// Styles for the container and event cards
const sectionStyles: CSSProperties = {
  padding: "50px 0",
  textAlign: "center",
  backgroundColor: "#f8f9fa",
};

const titleStyles: CSSProperties = {
  marginBottom: "30px",
  fontSize: "32px",
  fontWeight: "bold",
  fontFamily: '"Expletus Sans", sans-serif',
  textAlign: "left",
  paddingLeft: "30px",
};

const scrollContainerStyles: CSSProperties = {
  display: "flex",
  overflow: "hidden",
  gap: "20px",
  padding: "20px 0",
  scrollSnapType: "x mandatory",
  WebkitOverflowScrolling: "touch",
  touchAction: "none", // Disables default touch actions
};

const eventCardStyles: CSSProperties = {
  minWidth: "250px",
  backgroundColor: "#ffffff",
  borderRadius: "15px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  overflow: "hidden",
  scrollSnapAlign: "start",
};

const eventImageContainerStyles: CSSProperties = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  height: "250px",
};

const eventImageStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const buttonBaseStyles: CSSProperties = {
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px",
  backgroundColor: "#087E8B",
  color: "white",
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth transition for hover effect
};

const buttonHoverStyles: CSSProperties = {
  backgroundColor: "white",
  color: "#087E8B", // Darker shade of the button color
  transform: "translateX(-50%) scale(1.05)", // Slight scale effect
};

const eventInfoStyles: CSSProperties = {
  padding: "15px",
  textAlign: "left",
};

const eventTitleStyles: CSSProperties = {
  fontWeight: "bold",
  marginBottom: "5px",
};

const reviewStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
};

const starStyles: CSSProperties = {
  color: "#f39c12",
  marginRight: "5px",
};

const distanceStyles: CSSProperties = {
  color: "#6c757d",
  marginTop: "5px",
};

const Events: React.FC = () => {
  const [eventsData, setEventsData] = useState<EventData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch data from the server
    const fetchEvents = async () => {
      try {
        const response = await axios.get<EventData[]>(
          "http://localhost:3000/events"
        );
        setEventsData(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.scrollLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging && scrollContainerRef.current) {
      e.preventDefault();
      const x = e.pageX - startX;
      scrollContainerRef.current.scrollLeft = scrollLeft - x;
    }
  };

  const handleViewMapClick = (location: string) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`,
      "_blank"
    );
  };

  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>Trending Events In Sri Lanka</h2>
      <div
        ref={scrollContainerRef}
        style={scrollContainerStyles}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {eventsData.map((event, index) => (
          <div key={event.eventId} style={eventCardStyles}>
            <div style={eventTitleStyles}>{event.imageUrl}</div>
            <div style={eventTitleStyles}>{event.eventName}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
