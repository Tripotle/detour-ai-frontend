import Map from "../components/Map";
import { useLocation } from "react-router-dom";
import styles from "./Planner.module.css";
import Sidebar from "../components/SideBar";

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
<<<<<<< HEAD
      <Map apiKey={API_KEY} start={start} end={end} />
=======
      <Sidebar
        start={start}
        end={end}
        adj={adj}
        setStart={setStart}
        setEnd={setEnd}
        setAdj={setAdj}
      />
      <p>
        {start} to {end} seeing {adj}
      </p>
>>>>>>> dd5ab4b6700fe38e065c38cf245fb82d41531a6b
    </div>
  );
}
