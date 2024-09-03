import React, { useRef, useState, MouseEvent } from 'react';
import { CSSProperties } from 'react';

// Define the type for the event data
interface EventData {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  reviews: number;
  distance: string;
}

// Styles for the container and event cards
const sectionStyles: CSSProperties = {
  padding: '50px 0',
  textAlign: 'center',
  backgroundColor: '#f8f9fa',
};

const titleStyles: CSSProperties = {
  marginBottom: '30px',
  fontSize: '24px',
  fontWeight: 'bold',
};

const scrollContainerStyles: CSSProperties = {
  display: 'flex',
  overflow: 'hidden',
  gap: '20px',
  padding: '20px 0',
  scrollSnapType: 'x mandatory',
  WebkitOverflowScrolling: 'touch',
  touchAction: 'none', // Disables default touch actions
};

const eventCardStyles: CSSProperties = {
  minWidth: '250px',
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  overflow: 'hidden',
  scrollSnapAlign: 'start',
};

const eventImageContainerStyles: CSSProperties = {
  position: 'relative',
  width: '100%',
<<<<<<< Updated upstream
  overflow: 'hidden',
  height: '250px',
=======
  height: '250px',
  overflow: 'hidden',
>>>>>>> Stashed changes
};

const eventImageStyles: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const buttonBaseStyles: CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '10px',
  backgroundColor: '#087E8B',
  color: 'white',
  border: 'none',
  borderRadius: '15px',
  cursor: 'pointer',
  fontWeight: 'bold',
<<<<<<< Updated upstream
  transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
=======
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  height: '55px',
  width: '139px', // Smooth transition for hover effect
>>>>>>> Stashed changes
};

const buttonHoverStyles: CSSProperties = {
  backgroundColor: 'white',
  color: '#087E8B', // Darker shade of the button color
  transform: 'translateX(-50%) scale(1.05)', // Slight scale effect
};

const eventInfoStyles: CSSProperties = {
  padding: '15px',
  textAlign: 'left',
};

const eventTitleStyles: CSSProperties = {
  fontWeight: 'bold',
  marginBottom: '5px',
};

const reviewStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const starStyles: CSSProperties = {
  color: '#f39c12',
  marginRight: '5px',
};

const distanceStyles: CSSProperties = {
  color: '#6c757d',
  marginTop: '5px',
};

const TrendingEvents: React.FC = () => {
  const eventsData: EventData[] = [
    {
      title: 'Esala Perahera',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/esala.jpg',
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
      title: 'Nallur Festival',
      date: 'October 5, 2024',
<<<<<<< Updated upstream
      location: 'Galle',
      imageUrl: '/public/nallur.jpg',
      reviews: 320,
      distance: '90 Kilometers away',
=======
      location: 'Jaffna',
      imageUrl: '/public/nallur.jpg',
      reviews: 350,
      distance: '540 Kilometers away',
>>>>>>> Stashed changes
    },
    {
      title: 'Madhu Festival',
      date: 'August 12, 2024',
<<<<<<< Updated upstream
      location: 'Kandy',
      imageUrl: '/public/madhu.jfif',
      reviews: 480,
      distance: '187 Kilometers away',
=======
      location: 'Chilaw',
      imageUrl: '/public/madhu.jfif',
      reviews: 180,
      distance: '530 Kilometers away',
>>>>>>> Stashed changes
    },
    {
      title: 'Arugam Bay Surfing',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/arugambay.jfif',
<<<<<<< Updated upstream
      reviews: 320,
      distance: '90 Kilometers away',
=======
      reviews: 10,
      distance: '356 Kilometers away',
>>>>>>> Stashed changes
    },
    {
      title: 'Katharagama Perahera',
      date: 'August 12, 2024',
<<<<<<< Updated upstream
      location: 'Kandy',
      imageUrl: '/public/katharagama.jfif',
      reviews: 480,
      distance: '187 Kilometers away',
=======
      location: 'Kathragama',
      imageUrl: '/public/katharagama.jfif',
      reviews: 200,
      distance: '250 Kilometers away',
>>>>>>> Stashed changes
    },
    {
      title: 'SLARDAR Racing',
      date: 'August 12, 2024',
<<<<<<< Updated upstream
      location: 'Kandy',
      imageUrl: '/public/car.jfif',
      reviews: 480,
      distance: '187 Kilometers away',
=======
      location: 'Diyathlawa',
      imageUrl: '/public/car.jfif',
      reviews: 150,
      distance: '365 Kilometers away',
>>>>>>> Stashed changes
    },
    {
      title: 'The Tuk Tuk Tournament',
      date: 'October 5, 2024',
<<<<<<< Updated upstream
      location: 'Galle',
      imageUrl: '/public/threewheel.jfif',
      reviews: 320,
      distance: '90 Kilometers away',
=======
      location: 'Colombo',
      imageUrl: '/public/threewheel.jfif',
      reviews: 320,
      distance: '78 Kilometers away',
>>>>>>> Stashed changes
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
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
          <div key={index} style={eventCardStyles}>
            <div style={eventImageContainerStyles}>
              <img src={event.imageUrl} alt={event.title} style={eventImageStyles} />
              <button
                style={{
                  ...buttonBaseStyles,
                  ...(hoveredIndex === index ? buttonHoverStyles : {}),
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleViewMapClick(event.location)}
              >
                View In Map
              </button>
            </div>
            <div style={eventInfoStyles}>
              <div style={eventTitleStyles}>{event.title}</div>
              <div style={reviewStyles}>
                <span style={starStyles}>★</span>
                <span style={starStyles}>★</span>
                <span style={starStyles}>★</span>
                <span style={starStyles}>★</span>
                <span style={starStyles}>☆</span>
                {event.reviews} Reviews
              </div>
              <div style={distanceStyles}>{event.distance}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingEvents;
