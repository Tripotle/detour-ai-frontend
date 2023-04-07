import React from "react";
import "./SideBar.css";

export default function SideBar({
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
    <div className="sidebar">
      <h2>Route Settings</h2>
      <form>
        <label htmlFor="departure">Departure Location:</label>
        <input type="text" id="departure" name="departure" value={start} />

        <label htmlFor="destination">Destination Location:</label>
        <input type="text" id="destination" name="destination" value={end} />

        <label htmlFor="mode">Mode of Transportation:</label>
        <select id="mode" name="mode">
          <option value="driving">Driving</option>
          <option value="walking">Walking</option>
          <option value="bicycling">Bicycling</option>
          <option value="transit">Public Transit</option>
        </select>

        <label htmlFor="distance">Route Distance:</label>
        <select id="distance" name="distance">
          <option value="shortest">Shortest</option>
          <option value="fastest">Fastest</option>
          <option value="scenic">Scenic</option>
        </select>

        <label htmlFor="preferences">Route Preferences:</label>
        <textarea id="preferences" name="preferences" value={adj}></textarea>

        <button type="submit">Get Route</button>
      </form>
    </div>
  );
}
