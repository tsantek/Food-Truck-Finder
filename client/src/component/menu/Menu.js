import React from "react";
import { Button } from "reactstrap";
const Menu = () => {
  return (
    <div className="menu-container">
      <a className="title-name-header">Food Truck Finder </a>
      <a className="button-login">
        <img
          alt="logo"
          className="unknown-user"
          src="./img/user.png"
          height="100px"
        />
      </a>
    </div>
  );
};

export default Menu;
