import React from "react";
import Search from "../search/Search";
import Menu from "../menu/Menu";

const HeaderSearchComponent = () => {
  return (
    <div className="header-search-component">
      <Menu />
      <Search />
    </div>
  );
};

export default HeaderSearchComponent;
