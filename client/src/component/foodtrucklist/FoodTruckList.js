import React from "react";
import FoodTruckCard from "./FoodTruckCard";

const FoodTruckList = ({ trucks, locations, setLocations }) => {
  const mouseIn = locationId => {
    setLocations(
      locations.map(location => {
        if (location.id === locationId) {
          return {
            ...location,
            focus: true
          };
        } else {
          return location;
        }
      })
    );
  };

  const mouseOut = locationId => {
    setLocations(
      locations.map(location => {
        if (location.id === locationId) {
          return {
            ...location,
            focus: false
          };
        } else {
          return location;
        }
      })
    );
  };

  return (
    <div className="food-truck-list-container">
      {locations.map(location => (
        <div
          className="card"
          key={location.id}
          // onMouseEnter={() => mouseIn(location.id)}
        >
          <FoodTruckCard
            truck={trucks.find(truck => truck.id === location.truck_id)}
            location={location}
            mouseIn={mouseIn}
            mouseOut={mouseOut}
          />
        </div>
      ))}
    </div>
  );
};

export default FoodTruckList;
