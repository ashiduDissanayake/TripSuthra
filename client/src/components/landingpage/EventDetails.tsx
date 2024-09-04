import React from 'react';

const EsalaPerahera = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ position: 'relative' }}>
        <img
          src="path_to_your_image.jpg"
          alt="Esala Perahera"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <h1
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            color: 'white',
            fontSize: '2em',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          Esala perahera
        </h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ fontSize: '24px', color: 'gold' }}>★</span>
          <span style={{ fontSize: '24px', color: 'gold' }}>★</span>
          <span style={{ fontSize: '24px', color: 'gold' }}>★</span>
          <span style={{ fontSize: '24px', color: 'gold' }}>★</span>
          <span style={{ fontSize: '24px', color: 'lightgray' }}>★</span>
        </div>
        <div style={{ textAlign: 'right', fontSize: '14px' }}>
          <p>4</p>
          <p>380 reviews</p>
        </div>
        <div style={{ marginTop: '10px' }}>
          {['60%', '30%', '7%', '2%', '1%'].map((width, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <div style={{ width: '20px', fontSize: '14px', textAlign: 'right' }}>{5 - index}</div>
              <div
                style={{
                  height: '10px',
                  backgroundColor: 'lightgray',
                  flexGrow: 1,
                  marginLeft: '10px',
                  borderRadius: '5px',
                  width: width,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <img
          src="path_to_map_image.jpg"
          alt="Map"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div
        style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '5px',
        }}
      >
        <p>
          Esala Perahera is an annual Buddhist festival held in Kandy, Sri Lanka, to honor the sacred tooth relic of Lord Buddha. It is one of the most colorful and significant religious events in the country, featuring a grand procession with beautifully adorned elephants, traditional dancers, drummers, and fire performers. The highlight of the festival is the majestic elephant carrying a replica of the sacred tooth relic through the streets. The event usually lasts for ten days in July or August, symbolizing devotion and showcasing Sri Lankan culture and heritage.
        </p>
      </div>
    </div>
  );
};

export default EsalaPerahera;