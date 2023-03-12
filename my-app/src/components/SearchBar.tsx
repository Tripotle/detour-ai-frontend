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
      />
    </Autocomplete>
  );
}

export default React.memo(SearchBar);
