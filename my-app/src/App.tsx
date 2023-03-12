import "./App.css";
import { LoadScript } from "@react-google-maps/api";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";

const API_KEY = "AIzaSyAyk1O9rcmRWSSKHN0S5Vo2_iBavhj3DtA";

function App() {
  return (
    <div className="App">
      <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
        <Map apiKey={API_KEY} />
        <SearchBar apiKey={API_KEY} placeholder={"Boston, MA"} />
      </LoadScript>
    </div>
  );
}

export default App;
