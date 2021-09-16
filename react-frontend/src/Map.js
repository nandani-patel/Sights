import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import './Map.css';
import Navbar from './navBar';

import {FaMapPin} from 'react-icons/fa';
import NavBar from './navBar';

function Map() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 22,
    longitude: 85,
    zoom: 4
  });

  let iconStyles = { color: "red", fontSize: "1cm" };
  return (
    <ReactMapGL

      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/nandani-patel/ckt8xqhwg0awk17qwqbaeyxn7"
    >
    <div><NavBar/></div>
    <Marker latitude={22} longitude={85} offsetLeft={-20} offsetTop={-10}>
      <div className="mark"><FaMapPin style={iconStyles} /></div>
    </Marker>

    </ReactMapGL>
  );
}

export default Map;
