import React from 'react';
import '../styles/maps.css';
const Maps = () => {
  return (
    <section className="map-section">
      <h2 className="map-heading">Our Seedbank Network Map</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1opDBI-BQlTTirgnvYyXccPmsuEpw85k&z=7"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Seed Savers Kenya Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Maps;
