import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // For the search icon
import { CSSProperties } from 'react';

// Styles for the search bar container
const searchBarContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#fff',
  borderRadius: '30px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  width: '1229px',
  height: '70px',
};

// Styles for each section of the search bar
const searchBarSection: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  borderRight: '1px solid #e2e2e2',
  flex: 1,
  
};

const lastSection: CSSProperties = {
  ...searchBarSection,
  borderRight: 'none',
};

// Input styles for text and date fields
const inputStyles: CSSProperties = {
  border: 'none',
  outline: 'none',
  fontSize: '16px',
  padding: '5px',
  flex: 1,
  backgroundColor: 'transparent',
};

// Search button style
const searchButtonStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#087E8B',
  color: '#fff',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  
};

const HeroSearchBar: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    // Perform search action here
    console.log('Search:', { location, checkInDate, checkOutDate, guests });
  };

  return (
    <div style={searchBarContainer}>
      <div style={searchBarSection}>
        <input
          type="text"
          placeholder="Location"
          style={inputStyles}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div style={searchBarSection}>
        <input
          type="date"
          placeholder="Check-in"
          style={inputStyles}
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div style={searchBarSection}>
        <input
          type="date"
          placeholder="Check-out"
          style={inputStyles}
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      <div style={lastSection}>
        <input
          type="text"
          placeholder="Guests"
          style={inputStyles}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div style={searchButtonStyles} onClick={handleSearch}>
        <FaSearch />
      </div>
    </div>
  );
};

export default HeroSearchBar;
