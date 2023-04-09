import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Planner from "./pages/Planner";
import { useState } from "react";

interface Coord {
  lat: number;
  lng: number;
}

function App() {
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [adj, setAdj] = useState<string>("");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Landing setStart={setStart} setEnd={setEnd} setAdj={setAdj} />
          }
        />
        <Route
          path="/planner"
          element={
            <Planner
              start={start}
              end={end}
              adj={adj}
              setStart={setStart}
              setEnd={setEnd}
              setAdj={setAdj}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
