import React from "react";

const MapLoader = () => {
  return (
    <div className="loader-container">
      {/* <div className="loader"></div> */}
      <img src="./img/foodtruck.gif" alt="gif" height="150px" />
      <p style={{ textAlign: "center" }}> Loading map...</p>
    </div>
  );
};

export default MapLoader;
