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
  width: 'auto',
  height: '60px',
  marginTop: '120px',
  marginRight: '720px',
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
  color: '#13294b',
};

// Search button style
const searchButtonStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#087E8B',
  color: '#fff',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
};

const HeroSearchBar: React.FC = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Perform search action here
    console.log('Search:', { location});
  };

  return (
    <div style={searchBarContainer}>
      <div style={searchBarSection}>
        <input
          type="text"
          placeholder="Where to go...?"
          style={inputStyles}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div style={searchButtonStyles} onClick={handleSearch}>
        <FaSearch />
      </div>
    </div>
  );
};

export default HeroSearchBar;
