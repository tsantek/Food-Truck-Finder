import React, { useState } from "react";

const Marker = ({ truck, location }) => {
  const [state, setState] = useState(false);
  return (
    <div
      className={state || location.focus ? "pin pin-hover" : "pin"}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <div
        className={
          state || location.focus
            ? "img-mask-marker img-mask-marker-hover "
            : "img-mask-marker"
        }
      ></div>
      <img alt="img" className="pin-img" src={truck.img} />
      <div
        className={
          state || location.focus
            ? "about-marker about-marker-hover"
            : "about-marker"
        }
      >
        <div className="name-marker">
          {truck ? truck.name : "Sorry..refresh the page"}
        </div>
        <div className="subtitle-marker">
          {truck ? truck.subtitle : "Sorry..refresh the page"}
        </div>
        <div className="working-hours-marker">
          {location.location_time_start} to {location.location_time_end}
        </div>
      </div>
    </div>
  );
};

export default Marker;
