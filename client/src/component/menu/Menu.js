import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Menu = props => {
  const user = useSelector(state => state.payload);
  const { history } = props;

  const logout = () => {
    history.push("/");
    localStorage.clear();
  };

  return (
    <div className="menu-container">
      <div className="title-name-header">Food Truck Finder </div>
      <div className="button-login">
        <img
          alt="logo"
          className="unknown-user"
          src={user ? user.img : "./img/user.png"}
          height="100px"
        />
      </div>
      <ul className="truck-menu">
        <li onClick={() => logout()}>Logout</li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
