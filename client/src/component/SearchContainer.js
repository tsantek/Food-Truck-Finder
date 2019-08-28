import React from "react";
import FoodTruckList from "./foodtrucklist/FoodTruckList";
import HeaderSearchComponent from "./header/HeaderSearchComponent";

const SearchContainer = () => {
  return (
    <div className="search-container">
      <HeaderSearchComponent />
      <FoodTruckList />
    </div>
  );
};

export default SearchContainer;
