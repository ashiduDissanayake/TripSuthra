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
  fontSize: '32px',
  fontWeight: 'bold',
  fontFamily: '"Expletus Sans", sans-serif',
  textAlign: 'left',
  paddingLeft: '30px',
};

const scrollContainerStyles: CSSProperties = {
  display: 'flex',
  overflow: 'hidden',
  gap: '20px',
  padding: '20px 0',
  scrollSnapType: 'x mandatory',
  WebkitOverflowScrolling: 'touch',
  touchAction: 'none',
};

const eventCardStyles: CSSProperties = {
  position: 'relative',
  minWidth: '250px',
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  overflow: 'hidden',
  scrollSnapAlign: 'start',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transitions
};

// Popup hover effect
const eventCardHoverStyles: CSSProperties = {
  transform: 'scale(1.05)', // Slightly enlarges the card
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Adds a stronger shadow
};

const eventImageContainerStyles: CSSProperties = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  height: '250px',
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
  display: 'none', // Initially hidden
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

const buttonHoverStyles: CSSProperties = {
  backgroundColor: 'white',
  color: '#087E8B',
  transform: 'translateX(-50%) scale(1.05)',
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

// Styles for the favorite icon (top-right corner)
const favoriteIconStyles: CSSProperties = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  cursor: 'pointer',
  fontSize: '24px',
  color: '#ff6347', // Initially set color
};

const TrendingEvents: React.FC = () => {
  const eventsData: EventData[] = [
    // Your events data
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
      location: 'Galle',
      imageUrl: '/public/nallur.jpg',
      reviews: 320,
      distance: '90 Kilometers away',
    },
    {
      title: 'Madhu Festival',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/madhu.jfif',
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
      title: 'Arugam Bay Surfing',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/arugambay.jfif',
      reviews: 320,
      distance: '90 Kilometers away',
    },
    {
      title: 'Katharagama Perahera',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/katharagama.jfif',
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
      title: 'SLARDAR Racing',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/car.jfif',
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
      title: 'The Tuk Tuk Tournament',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/threewheel.jfif',
      reviews: 320,
      distance: '90 Kilometers away',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [favoriteIndexes, setFavoriteIndexes] = useState<number[]>([]);

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
      <div
        ref={scrollContainerRef}
        style={scrollContainerStyles}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {eventsData.map((event, index) => (
          <div
            key={index}
            style={{
              ...eventCardStyles,
              ...(hoveredIndex === index ? eventCardHoverStyles : {}), // Apply popup effect on hover
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={eventImageContainerStyles}>
              <img src={event.imageUrl} alt={event.title} style={eventImageStyles} />
              <button
                style={{
                  ...buttonBaseStyles,
                  display: hoveredIndex === index ? 'block' : 'none', // Show button on hover
                  ...(hoveredIndex === index ? buttonHoverStyles : {}),
                }}
                onClick={() => handleViewMapClick(event.location)}
              >
                View In Map
              </button>
            </div>
            <div
              style={favoriteIconStyles}
              onClick={() => toggleFavorite(index)}
            >
              {favoriteIndexes.includes(index) ? '❤️' : '🤍'}
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
