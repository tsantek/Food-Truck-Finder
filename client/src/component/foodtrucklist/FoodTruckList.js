import React from "react";

const FoodTruckList = () => {
  return (
    <div className="food-truck-list-container">
      <div className="Card">
        <div className="img-card">
          <img
            style={{ height: "50px", width: "50px", float: "left" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObsbvRGTJUXbhzLkABpz25DUm9L37LV05xAsUpeT8hI4I49Lj"
            alt="test"
          />
          <div className="truck-title-card">Dog Truck</div>
          <div className="truck-sutitle-card">Mexican Tacos</div>
        </div>
      </div>
    </div>
  );
};

export default FoodTruckList;
