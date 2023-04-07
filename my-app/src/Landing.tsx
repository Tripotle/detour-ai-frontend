import { LoadScript } from "@react-google-maps/api";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import { Link } from "react-router-dom";

const API_KEY = "AIzaSyAyk1O9rcmRWSSKHN0S5Vo2_iBavhj3DtA";

export default function Landing() {
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <div>
        <h2
          style={{
            fontWeight: 100,
            fontSize: "24px",
          }}
        >
          From:
        </h2>
        <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
          <SearchBar apiKey={API_KEY} placeholder={"Boston, MA"} />
        </LoadScript>
      </div>
      <br />
      <div>
        <h2
          style={{
            fontWeight: 100,
            fontSize: "24px",
          }}
        >
          To:
        </h2>
        <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
          <SearchBar apiKey={API_KEY} placeholder={"New York, NY"} />
        </LoadScript>
      </div>
      <br />
      <br />
      <div>
        <h2
          style={{
            fontWeight: 100,
            fontFamily: "Inter, sans-serif",
            fontSize: "28px",
            display: "inline-block",
          }}
        >
          Take me somewhere
        </h2>
        <input
          type="text"
          placeholder={"beautiful"}
          style={{
            backgroundColor: "#FEF9EF",
            border: "1px solid transparent",
            borderBottom: "1px solid black",
            fontWeight: 900,
            width: "120px",
            resize: "horizontal",
            height: "35px",
            fontSize: "28px",
            outline: "none",
            textOverflow: "ellipses",
            display: "inline-block",
            marginLeft: "6px",
            marginRight: "12px",
          }}
        />
        <Link to="/planner">
          <button
            style={{
              fontWeight: 900,
              backgroundColor: "#17C3B2",
              border: "none",
              color: "#FEF9EF",
              padding: "8px 16px",
              textAlign: "center",
              fontSize: "28px",
              borderRadius: "12px",
              display: "inline-block",
            }}
          >
            Go
          </button>
        </Link>
      </div>
    </div>
  );
}
