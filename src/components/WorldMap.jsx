import React, { useEffect } from 'react';
import jsVectorMap from 'jsvectormap'; 
import 'jsvectormap/dist/jsvectormap.css';


const WorldMap = () => {
  useEffect(() => {
    // Initialize the map
    new jsVectorMap({
      map: 'world',
      selector: '#worldMap',
      markers: [
        { name: 'USA', coords: [37.0902, -95.7129] },
        { name: 'Russia', coords: [55.7558, 37.6173] },
      ],
    });
  }, []);

  return <div id="worldMap" style={{ width: '100%', height: '400px' }}></div>;
};

export default WorldMap;