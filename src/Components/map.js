import React, { useState, useRef, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';


const Officemap = () => {

    const [center, setcenter] = useState({
        lat: -1.297919055639808,
        lng: 36.78878215326024
    });



    const [zoomno, setzoomno] = useState(15);
    const GoogleMapsApiKey = "AIzaSyB4Tle4NUq0FQmy8pxMUWsMOOMwVNqt00M"
    const containerStyle = {
        width: '90%',
        margin: "0 auto",
        height: '600px'
    };


    const handlezoom = ({ lat, lng }) => {
        const mapcenteer = {
            lat: lat,
            lng: lng
        };
        setcenter(mapcenteer)
        setzoomno(zoomno + 1)

    }


    return (
        <LoadScript
            googleMapsApiKey={GoogleMapsApiKey}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                DirectionsRenderer
                zoom={zoomno}
            >
                <Marker title={"Sovit International"} position={{ lat: -1.297919055639808, lng: 36.78878215326024 }} onClick={() => handlezoom({ lat: -1.297919055639808, lng: 36.78878215326024 })} />

            </GoogleMap>
        </LoadScript>
    )
}

export default Officemap;

