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
  height: '150px',
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
<<<<<<< Updated upstream
  padding: '10px',
  backgroundColor: '#087E8B',
  color: 'white',
  border: 'none',
  borderRadius: '15px',
=======
  padding: '10px 20px',
  backgroundColor: '#00a699',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
>>>>>>> Stashed changes
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
};

const buttonHoverStyles: CSSProperties = {
<<<<<<< Updated upstream
  backgroundColor: 'white',
  color: '#087E8B', // Darker shade of the button color
=======
  backgroundColor: '#008c8c', // Darker shade of the button color
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      title: 'Ella',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/ella.jpg',
=======
      title: 'Esala Perahera',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/esala.jpg',
>>>>>>> Stashed changes
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
<<<<<<< Updated upstream
      title: 'Hikkaduwa',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/hikkaduwa.jpg',
=======
      title: 'Nallur Festival',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/nallur.jpg',
>>>>>>> Stashed changes
      reviews: 320,
      distance: '90 Kilometers away',
    },
    {
<<<<<<< Updated upstream
      title: 'Yala National Park',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/yala.jfif',
=======
      title: 'Madhu Festival',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/madhu.jfif',
>>>>>>> Stashed changes
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
<<<<<<< Updated upstream
      title: 'Temple of the Tooth Relic',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/daladamaligawa.jfif',
=======
      title: 'Arugam Bay Surfing',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/arugambay.jfif',
>>>>>>> Stashed changes
      reviews: 320,
      distance: '90 Kilometers away',
    },
    {
<<<<<<< Updated upstream
      title: 'Galle',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/galle.jpg',
=======
      title: 'Katharagama Perahera',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/katharagama.jfif',
>>>>>>> Stashed changes
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
<<<<<<< Updated upstream
      title: 'Colombo',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/colombo.jpg',
=======
      title: 'SLARDAR Racing',
      date: 'August 12, 2024',
      location: 'Kandy',
      imageUrl: '/public/car.jfif',
>>>>>>> Stashed changes
      reviews: 480,
      distance: '187 Kilometers away',
    },
    {
<<<<<<< Updated upstream
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
=======
      title: 'The Tuk Tuk Tournament',
      date: 'October 5, 2024',
      location: 'Galle',
      imageUrl: '/public/threewheel.jfif',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <h2 style={titleStyles}>Trending Destinations In Sri Lanka</h2>
=======
      <h2 style={titleStyles}>Trending Events In Sri Lanka</h2>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
                onMouseDown={(e) => (e.currentTarget.style.transform = 'translateX(-50%) scale(0.95)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'translateX(-50%) scale(1)')}
>>>>>>> Stashed changes
                onClick={() => handleViewMapClick(event.location)}
              >
                View In Map
              </button>
            </div>
            <div style={eventInfoStyles}>
              <div style={eventTitleStyles}>{event.title}</div>
              <div style={reviewStyles}>
                <span style={starStyles}>★</span>
<<<<<<< Updated upstream
                <span style={starStyles}>★</span>
                <span style={starStyles}>★</span>
                <span style={starStyles}>★</span>
                <span style={starStyles}>☆</span>
=======
>>>>>>> Stashed changes
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

export default TrendingDestinations
