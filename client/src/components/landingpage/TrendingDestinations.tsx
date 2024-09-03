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
  transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
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

const TrendingDestinations: React.FC = () => {
  const eventsData: EventData[] = [
    {
      title: 'Ella',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/ella.jpg',
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
      title: 'Hikkaduwa',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/hikkaduwa.jpg',
      reviews: 320,
      distance: '90 Kilometers away',
    },
    {
      title: 'Yala National Park',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/yala.jfif',
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
      title: 'Temple of the Tooth Relic',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/daladamaligawa.jfif',
      reviews: 320,
      distance: '90 Kilometers away',
    },
    {
      title: 'Galle',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/galle.jpg',
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
      title: 'Colombo',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/colombo.jpg',
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
      title: 'Polonnaruwa',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/polonnaruwa.jfif',
      reviews: 320,
      distance: '90 Kilometers away',
    },
    {
      title: 'Nuwara Eliya',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/nuwaraeliya.jpg',
      reviews: 320,
      distance: '90 Kilometers away',
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
      <h2 style={titleStyles}>Trending Destinations In Sri Lanka</h2>
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

export default TrendingDestinations;
