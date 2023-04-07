import Map from "../components/Map";
import { useLocation } from "react-router-dom";
import styles from "./Landing.module.css";

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
      <p>
        {start} to {end} seeing {adj}
      </p>
    </div>
  );
}
