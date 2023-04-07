import React from "react";
import "./SideBar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h2>Route Settings</h2>
        <form>
          <label htmlFor="departure">Departure Location:</label>
          <input type="text" id="departure" name="departure" />

          <label htmlFor="destination">Destination Location:</label>
          <input type="text" id="destination" name="destination" />

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
          <textarea id="preferences" name="preferences"></textarea>

          <button type="submit">Get Route</button>
        </form>
      </div>
    );
  }
}

export default Sidebar;
