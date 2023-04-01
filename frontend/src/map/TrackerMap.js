import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './TrackerMap.css';
const TrackerMap = () => {

  const [currentPosition, setCurrentPosition] = useState({});
  
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  console.log(currentPosition.lat);
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyC49_JDuSadpV6zVkRORRELrbM_JAG2bxA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}>
                   {
            currentPosition.lat &&
            ( 
              <Marker position={currentPosition}/>
            ) 
          }
        </GoogleMap>
     </LoadScript>
  )
}
export default TrackerMap;