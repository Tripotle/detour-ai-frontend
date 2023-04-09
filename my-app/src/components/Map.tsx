import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function Map({
  apiKey,
  start,
  end,
}: {
  apiKey: string;
  start: string;
  end: string;
}) {
  const [response, setResponse] = useState(null);
  const [directionsRequested, setDirectionsRequested] = useState(false);

  const directionsCallback = useCallback((response: any) => {
    if (response !== null) {
      if (response.status === "OK") {
        setResponse(response);
        setDirectionsRequested(true);
      } else {
        console.log("response: ", response);
      }
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={2}
        center={{
          lat: 0,
          lng: -180,
        }}
      >
        {!directionsRequested && (
          <DirectionsService
            options={{
              destination: end,
              origin: start,
              travelMode: window.google.maps.TravelMode.DRIVING,
            }}
            callback={directionsCallback}
          />
        )}

        {response !== null && (
          <DirectionsRenderer
            options={{
              directions: response,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
