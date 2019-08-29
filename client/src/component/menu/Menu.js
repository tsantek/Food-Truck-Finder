import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

const Menu = () => {
  const user = useSelector(state => state.payload);
  return (
    <div className="menu-container">
      <a className="title-name-header">Food Truck Finder </a>
      <a className="button-login">
        <img
          alt="logo"
          className="unknown-user"
          src={user ? user.img : "./img/user.png"}
          height="100px"
        />
      </a>
    </div>
  );
};

export default Menu;
