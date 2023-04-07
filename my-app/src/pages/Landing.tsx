import { LoadScript } from "@react-google-maps/api";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const API_KEY = "AIzaSyAyk1O9rcmRWSSKHN0S5Vo2_iBavhj3DtA";

export default function Landing({
  setStart,
  setEnd,
  setAdj,
}: {
  setStart: any;
  setEnd: any;
  setAdj: any;
}) {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>From:</h2>
        <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
          <SearchBar
            apiKey={API_KEY}
            placeholder={"Boston, MA"}
            setValue={setStart}
          />
        </LoadScript>
      </div>
      <br />
      <div>
        <h2 className={styles.heading}>To:</h2>
        <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
          <SearchBar
            apiKey={API_KEY}
            placeholder={"New York, NY"}
            setValue={setEnd}
          />
        </LoadScript>
      </div>
      <br />
      <br />
      <div>
        <h2 className={styles.takeMeSomewhere}>Take me somewhere</h2>
        <input
          type="text"
          placeholder={"beautiful"}
          className={styles.input}
          onChange={(event: any) => {
            setAdj(event.target.value);
          }}
        />
        <Link to="/planner">
          <button className={styles.button}>Go</button>
        </Link>
      </div>
    </div>
  );
}
