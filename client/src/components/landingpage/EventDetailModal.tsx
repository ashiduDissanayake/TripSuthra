import React from 'react';

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    imageUrl: string;
    location: string;
    description: string;
    rating: number;
    reviews: number;
  };
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  // Inline styles
  const modalOverlayStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  };

  const modalContentStyles: React.CSSProperties = {
    backgroundColor: 'white',
    width: '600px',
    maxWidth: '90%',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
    padding: '20px',
  };

  const closeButtonStyles: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '25px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  };

  const eventImageContainerStyles: React.CSSProperties = {
    position: 'relative',
  };

  const eventImageStyles: React.CSSProperties = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  };

  const eventTitleStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
  };

  const eventDetailsStyles: React.CSSProperties = {
    marginTop: '20px',
  };

  const ratingSectionStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const ratingNumberStyles: React.CSSProperties = {
    fontSize: '50px',
    marginRight: '10px',
  };

  const starsStyles: React.CSSProperties = {
    fontSize: '20px',
    marginRight: '10px',
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: '16px',
    marginBottom: '15px',
  };

  const mapContainerStyles: React.CSSProperties = {
    width: '100%',
    height: '250px',
  };

  const iframeStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    border: 'none',
  };

  return (
    <div style={modalOverlayStyles} onClick={onClose}>
      <div style={modalContentStyles} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyles} onClick={onClose}>×</button>
        <div style={eventImageContainerStyles}>
          <img src={event.imageUrl} alt={event.title} style={eventImageStyles} />
          <h2 style={eventTitleStyles}>{event.title}</h2>
        </div>
        <div style={eventDetailsStyles}>
          <div style={ratingSectionStyles}>
            <h1 style={ratingNumberStyles}>{event.rating}</h1>
            <div style={starsStyles}>
              {'★'.repeat(Math.floor(event.rating)) + '☆'.repeat(5 - Math.floor(event.rating))}
            </div>
            <p>{event.reviews} Reviews</p>
          </div>
          <p style={descriptionStyles}>{event.description}</p>
          <div style={mapContainerStyles}>
            <iframe
              title="Google Map"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(event.location)}`}
              allowFullScreen
              style={iframeStyles}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;
