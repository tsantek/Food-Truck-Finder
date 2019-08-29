import React from "react";
import SearchContainer from "./SearchContainer";
import GoogleMaps from "./maps/GoogleMaps";
import { Row, Col } from "reactstrap";
import Logo from "./logo/Logo";

const UserView = () => {
  return (
    <div className="App">
      <Logo />
      <Row style={{ height: "100vh" }}>
        <Col
          md="9"
          className="remove-padding-margin"
          style={{ backgroundColor: "#EFEFEB" }}
        >
          <GoogleMaps />
        </Col>
        <Col md="3" className="remove-padding-margin">
          <SearchContainer />
        </Col>
      </Row>
    </div>
  );
};

export default UserView;
