import React, { useState } from "react";

const Marker = ({ truck, location }) => {
  const [state, setState] = useState(false);

  const convertTime = time => {
    let timeSplited = time.split(":");
    let fullTime;
    if (timeSplited[0] > 12) {
      fullTime =
        (timeSplited[0] - 12).toString() + ":" + timeSplited[1] + " PM";
    } else if (timeSplited[0] === 24) {
      fullTime = time + " PM";
    } else {
      fullTime = time + " AM";
    }
    return fullTime;
  };

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
      <img alt="img" className="pin-img" src={truck && truck.img} />
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
          {convertTime(location.location_time_start)} to <span> </span>
          {convertTime(location.location_time_end)}
        </div>
      </div>
    </div>
  );
};

export default Marker;
