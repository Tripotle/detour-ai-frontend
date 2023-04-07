import Map from "../components/Map";
import { useLocation } from "react-router-dom";
import styles from "./Planner.module.css";
import Sidebar from "../components/SideBar";

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
    </div>
  );
}
