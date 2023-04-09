import React, { useState, useCallback, useRef } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

function SearchBar({
  apiKey,
  placeholder,
  setValue,
}: {
  apiKey: string;
  placeholder: string;
  setValue: any;
}) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const listenerRef = useRef<google.maps.MapsEventListener | null>(null);

  const handleLoad = useCallback((autocomplete: any) => {
    autocompleteRef.current = autocomplete;
    listenerRef.current = autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      console.log(place.formatted_address);
      setValue(place.formatted_address);
    });
  }, []);

  const handleUnmount = useCallback(() => {
    if (autocompleteRef.current && listenerRef.current) {
      google.maps.event.removeListener(listenerRef.current);
    }
  }, []);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
      <Autocomplete onLoad={handleLoad} onUnmount={handleUnmount}>
        <input
          type="text"
          placeholder={placeholder}
          style={{
            backgroundColor: "#FEF9EF",
            boxSizing: "border-box",
            border: "1px solid transparent",
            borderBottom: "1px solid black",
            fontWeight: 900,
            width: "400px",
            height: "40px",
            padding: "0 12px",
            fontSize: "32px",
            outline: "none",
            textOverflow: "ellipses",
          }}
          onChange={handleChange}
        />
      </Autocomplete>
    </LoadScript>
  );
}

export default React.memo(SearchBar);
