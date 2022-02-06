import React from "react";
const LocationInfoBox = ({ info, closeLocationInfo }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
        <li>
          DATE: <strong>{info.date}</strong>
        </li>
      </ul>
      <div className="close-button" onClick={closeLocationInfo}></div>
    </div>
  );
};

export default LocationInfoBox;
