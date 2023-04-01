import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './TrackerMap.css';
const TrackerMap = () => {
  const currImage = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  const [currentPosition, setCurrentPosition] = useState({});
  
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };

  const studyPlaces = [
    {
      name: "Loc 1",
      location: { 
        lat: 41.3954,
        lng: -76 
      },
    },
    {
      name: "Loc 2",
      location: { 
        lat: 40.3917,
        lng: -78
      },
    },
    {
      name: "Loc 3",
      location: { 
        lat: 40.89,
        lng: -77.89
      },
    },
    {
      name: "Loc 4",
      location: { 
        lat: 40,
        lng: -77.67
      },
    },
    {
      name: "Loc 5",
      location: { 
        lat: 41.4055,
        lng: -78.2
      },
    }
  ];

  var studyPlaceIcons = studyPlaces.map(item => {
   // console.log(item.name);
   return(
      <Marker key={item.name} position={item.location} icon={currImage}/>
    // <p>Goutham</p>
   ) })

   var studyHTMLTags = ""
   for (let i = 0; i < studyPlaceIcons.length; i++) {
    studyHTMLTags += studyPlaceIcons[i] + "\n";
    }


    console.log("hell:", studyHTMLTags);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  console.log(currentPosition.lat, currentPosition.lng);
 
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyC49_JDuSadpV6zVkRORRELrbM_JAG2bxA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}>
          {/* {
            currentPosition.lat &&
            ( 
              <Marker position={currentPosition} icon= {currImage}/>
            ) 
          } */}
          {studyPlaceIcons}
        </GoogleMap>
     </LoadScript>
  )
}
export default TrackerMap;