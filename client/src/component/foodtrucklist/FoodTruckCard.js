import React from "react";

import ReactStars from "react-stars";

const FoodTruckCard = ({ truck, location, mouseIn, mouseOut }) => {
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
      onMouseEnter={() => mouseIn(location.id)}
      onMouseOut={() => mouseOut(location.id)}
    >
      <div className="img-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObsbvRGTJUXbhzLkABpz25DUm9L37LV05xAsUpeT8hI4I49Lj"
          alt="test"
          className="img-truck-list"
        />
        <div className="card-text">
          <div className="title-start">
            <div className="truck-title-card">
              {truck ? truck.name : "Sorry somthing went wrong..."}
            </div>
            <ReactStars
              count={5}
              size={14}
              color2={"#ffd700"}
              value={truck ? truck.review : 0}
              className="stars"
              // edit={false}
            />
          </div>
          <p className="truck-sutitle-card">
            {truck ? truck.subtitle : "Sorry somthing went wrong..."}
          </p>
          <p className="truck-time-today">
            From {convertTime(location.location_time_start)} to <span> </span>
            {convertTime(location.location_time_end)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodTruckCard;
