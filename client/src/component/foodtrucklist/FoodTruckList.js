import React from "react";
import ReactStars from "react-stars";

const FoodTruckList = props => {
  const { trucks } = props;
  console.log(trucks.trucks);
  return (
    <div className="food-truck-list-container">
      {trucks.trucks &&
        trucks.trucks.map(truck => (
          <div className="card" key={truck.id}>
            <div className="img-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObsbvRGTJUXbhzLkABpz25DUm9L37LV05xAsUpeT8hI4I49Lj"
                alt="test"
                className="img-truck-list"
              />
              <div className="card-text">
                <div className="title-start">
                  <div className="truck-title-card">{truck.name}</div>
                  <ReactStars
                    count={5}
                    size={14}
                    color2={"#ffd700"}
                    value={truck.review}
                    className="stars"
                    edit={false}
                  />
                </div>
                <p className="truck-sutitle-card">{truck.subtitle}</p>
                <p className="truck-time-today">From 10:00am to 2:00pm</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FoodTruckList;
