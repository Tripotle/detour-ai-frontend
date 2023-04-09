import Map from "../components/Map";
import { useLocation } from "react-router-dom";
import styles from "./Landing.module.css";

const API_KEY = "AIzaSyAyk1O9rcmRWSSKHN0S5Vo2_iBavhj3DtA";

interface Coord {
  lat: number;
  lng: number;
}

export default function Planner({
  start,
  end,
  adj,
  setStart,
  setEnd,
  setAdj,
}: {
  start: string;
  end: string;
  adj: string;
  setStart: any;
  setEnd: any;
  setAdj: any;
}) {
  return (
    <div className={styles.container}>
      <Map apiKey={API_KEY} start={start} end={end} />
    </div>
  );
}
