import React from "react";
import Search from "./search/Search";
import FoodTruckList from "./foodtrucklist/FoodTruckList";

const SearchContainer = () => {
  return (
    <div className="search-container">
      <Search />
      <FoodTruckList />
    </div>
  );
};

export default SearchContainer;
