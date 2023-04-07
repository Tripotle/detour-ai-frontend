import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./Landing";
import Planner from "./Planner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  );
}

export default App;
