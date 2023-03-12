import React from "react";
import { Input } from "antd";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

function SearchBar({
  apiKey,
  placeholder,
}: {
  apiKey: string;
  placeholder: string;
}) {
  return (
    <Autocomplete
      onLoad={(autocomplete) =>
        console.log("Autocomplete loaded:", autocomplete)
      }
      onPlaceChanged={() => console.log("Place changed")}
    >
      <input
        type="text"
        placeholder="Enter a location"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: "absolute",
          left: "50%",
          marginLeft: "-120px",
        }}
      />
    </Autocomplete>
  );
}

export default React.memo(SearchBar);
