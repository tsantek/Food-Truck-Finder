import React from "react";
import { Input } from "reactstrap";

const Search = () => {
  return (
    <div className="search">
      <Input
        type="text"
        name="search"
        id="search"
        placeholder="Search Food Truck"
      />
    </div>
  );
};

export default Search;
