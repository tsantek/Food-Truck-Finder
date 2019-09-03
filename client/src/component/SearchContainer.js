import React from "react";
import FoodTruckList from "./foodtrucklist/FoodTruckList";
import HeaderSearchComponent from "./header/HeaderSearchComponent";

const SearchContainer = ({ locations, trucks }) => {
  return (
    <div className="search-container">
      <HeaderSearchComponent />
      <FoodTruckList trucks={trucks} locations={locations} />
    </div>
  );
};

export default SearchContainer;
