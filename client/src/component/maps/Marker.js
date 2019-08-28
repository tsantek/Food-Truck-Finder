import React, { useState } from "react";

const Marker = ({ text }) => {
  const [state, setState] = useState(false);
  console.log(state);
  return (
    <div
      className={state ? "pin pin-hover" : "pin"}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <div
        className={
          state ? "img-mask-marker img-mask-marker-hover " : "img-mask-marker"
        }
      ></div>
      <img
        alt="img"
        className="pin-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObsbvRGTJUXbhzLkABpz25DUm9L37LV05xAsUpeT8hI4I49Lj"
      />
      <div
        className={state ? "about-marker about-marker-hover" : "about-marker"}
      >
        <div className="name-marker">DOG TRUCK</div>
        <div className="subtitle-marker">Mexican Food</div>
        <div className="working-hours-marker">10:00am to 2:00 pm</div>
      </div>
    </div>
  );
};

export default Marker;
