import React, { useState } from "react";
import { Input } from "antd";
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
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Autocomplete>
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
  );
}

export default React.memo(SearchBar);
