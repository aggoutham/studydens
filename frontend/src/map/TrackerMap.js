import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF, useGoogleMap, InfoWindowF } from '@react-google-maps/api';
import './TrackerMap.css';

var TrackerMap = (props) => {
    console.log("Map object rendering now !!!")

    let map = null;


    var currImage = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    var [currentPosition, setCurrentPosition] = useState({});
    const [selected, setSelected] = useState({});

    if (!currentPosition.hasOwnProperty('lat')) {
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log('Ran geo', pos.coords)
            setCurrentPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            console.log(currentPosition);
        });
    }

    //    console.log("curr:", currentPosition);

    function handleZoomChanged() {
        var bounds = this.getBounds();
        if (bounds != undefined) {
            console.log("map obj:", this) //this refers to Google Map instance
            console.log("bounds:", bounds.Va.lo, bounds.Va.hi, bounds.Ga.lo, bounds.Ga.hi);


            var data = {
                "l_latitude": bounds.Va.lo,
                "l_longitude": bounds.Ga.lo,
                "h_latitude": bounds.Va.hi,
                "h_longitude": bounds.Ga.hi};
            
            props.mapCallBack(data);
        }

        return;
    }

    // const studyPlaces = [
    //     {
    //         name: "Loc 1",
    //         location: {
    //             lat: 41.3954,
    //             lng: -76
    //         },
    //     },
    //     {
    //         name: "Loc 2",
    //         location: {
    //             lat: 40.3917,
    //             lng: -78
    //         },
    //     },
    //     {
    //         name: "Loc 3",
    //         location: {
    //             lat: 40.89,
    //             lng: -77.89
    //         },
    //     },
    //     {
    //         name: "Loc 4",
    //         location: {
    //             lat: 40,
    //             lng: -77.67
    //         },
    //     },
    //     {
    //         name: "Loc 5",
    //         location: {
    //             lat: 41.4055,
    //             lng: -78.2
    //         },
    //     }
    // ];
    const studyPlaces = props.studyPlaces;
    if(studyPlaces.length == 0)
        return;
    console.log("studyplaces: ", studyPlaces)

    const onSelect = item => {
        item.location.lat += 0.001;
        setSelected(item);
    }

    var studyPlaceIcons = studyPlaces.map(item => {
        return (
            <div key={item.name}>
                <MarkerF position={item.location} onClick={() => onSelect(item)} />
            </div>
        )
    });

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };


    // console.log(currentPosition.lat, currentPosition.lng);

    return (
        <div>
            <LoadScript
                googleMapsApiKey='AIzaSyC49_JDuSadpV6zVkRORRELrbM_JAG2bxA'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    onZoomChanged={handleZoomChanged}
                    center={{ lat: 40.80, lng: -77.86 }}>
                    {
                        currentPosition.lat &&
                        (
                            <MarkerF position={currentPosition} icon={currImage} />
                        )}
                    {studyPlaceIcons}
                    {
                        selected.location &&
                        (
                            <InfoWindowF
                                position={selected.location}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                            >
                                <p>{selected.name}</p>
                            </InfoWindowF>
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )







}
export default TrackerMap;