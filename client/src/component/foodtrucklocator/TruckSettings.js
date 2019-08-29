import React from "react";
import { Button, Form, FormGroup } from "reactstrap";

const SearchContainer = () => {
  return (
    <div className="truck-info-container">
      <div className="menu-container">
        <div className="title-name-header">Food Truck Finder </div>
        <div className="button-login" style={{ marginRight: "10px" }}>
          <img
            alt="logo"
            className="unknown-user"
            src="./img/user.png"
            height="100px"
          />
        </div>
      </div>
      <ul className="truck-menu">
        <li>Logout</li>
      </ul>

      <div className="card" style={{ padding: "5px" }}>
        <Form>
          <p>Add new stop</p>
          <span className="form-add-new-stop-label">From</span>
          <input type="time" />

          <span className="form-add-new-stop-label">To</span>

          <input type="time" />
          <div className="submit-btn-form-add-new-stop">
            <p style={{ marginTop: "5px" }}> Select location on the map...</p>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>

      {/* CARD */}
      <div className="card">
        <div className="card-text" style={{ padding: "10px" }}>
          <p className="truck-time-today">From 10:00am to 2:00pm</p>
          <div className="stop-delete-button">
            <Button color="link">Delete</Button>
          </div>
        </div>
      </div>
      {/* CARD END */}
    </div>
  );
};

export default SearchContainer;
