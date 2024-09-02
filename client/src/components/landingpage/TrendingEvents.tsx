import React from 'react';
import { CSSProperties } from 'react';

// Define the type for the event data
interface EventData {
    title: string;
    date: string;
    location: string;
    imageUrl: string;
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
    overflowX: 'auto', // Enable horizontal scrolling
    padding: '20px 0',
    gap: '20px',
    scrollBehavior: 'smooth',
};

const eventCardStyles: CSSProperties = {
    minWidth: '250px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '15px',
    flexShrink: 0, // Prevent the cards from shrinking
};

const eventImageStyles: CSSProperties = {
    width: '100%',
    height: '150px',
    borderRadius: '10px',
    objectFit: 'cover',
    marginBottom: '10px',
};

const eventTitleStyles: CSSProperties = {
    fontWeight: 'bold',
    marginBottom: '10px',
};

const eventDateLocationStyles: CSSProperties = {
    color: '#6c757d',
    marginBottom: '10px',
};

const TrendingEvents: React.FC = () => {
    const eventsData: EventData[] = [
        {
            title: 'Cultural Festival 2024',
            date: 'June 15, 2024',
            location: 'Colombo',
            imageUrl: 'https://via.placeholder.com/250x150',
        },
        {
            title: 'Kandy Esala Perahera',
            date: 'August 12, 2024',
            location: 'Kandy',
            imageUrl: 'https://via.placeholder.com/250x150',
        },
        {
            title: 'Jaffna Music Festival',
            date: 'September 22, 2024',
            location: 'Jaffna',
            imageUrl: 'https://via.placeholder.com/250x150',
        },
        {
            title: 'Galle Literary Festival',
            date: 'October 5, 2024',
            location: 'Galle',
            imageUrl: 'https://via.placeholder.com/250x150',
        },
        {
            title: 'Galle Literary Festival',
            date: 'October 5, 2024',
            location: 'Galle',
            imageUrl: 'https://via.placeholder.com/250x150',
        },
        {
            title: 'Galle Literary Festival',
            date: 'October 5, 2024',
            location: 'Galle',
            imageUrl: 'https://via.placeholder.com/250x150',
        },
        {
            title: 'Galle Literary Festival',
            date: 'October 5, 2024',
            location: 'Galle',
            imageUrl: 'https://via.placeholder.com/250x150',
        },
        {
            title: 'Galle Literary Festival',
            date: 'October 5, 2024',
            location: 'Galle',
            imageUrl: 'https://via.placeholder.com/250x150',
        },
    ];

    return (
        <section style={sectionStyles}>
            <h2 style={titleStyles}>Trending Events In Sri Lanka</h2>
            <div style={scrollContainerStyles}>
                {eventsData.map((event, index) => (
                    <div key={index} style={eventCardStyles}>
                        <img src={event.imageUrl} alt={event.title} style={eventImageStyles} />
                        <div style={eventTitleStyles}>{event.title}</div>
                        <div style={eventDateLocationStyles}>{event.date}</div>
                        <div style={eventDateLocationStyles}>{event.location}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingEvents;
