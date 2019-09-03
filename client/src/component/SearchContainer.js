import React from "react";
import FoodTruckList from "./foodtrucklist/FoodTruckList";
import HeaderSearchComponent from "./header/HeaderSearchComponent";

const SearchContainer = props => {
  return (
    <div className="search-container">
      <HeaderSearchComponent />
      <FoodTruckList trucks={props.trucks} />
    </div>
  );
};

export default SearchContainer;
