import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add markers and other map components here */}
      </GoogleMap>
    </LoadScript>
  );
}
