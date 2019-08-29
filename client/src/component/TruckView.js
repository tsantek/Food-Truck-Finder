import React from "react";
import GoogleMapsTrack from "./maps/GoogleMapsTrack";
import { Row, Col } from "reactstrap";
import Logo from "./logo/Logo";
import TruckSettings from "./foodtrucklocator/TruckSettings";

const UserView = () => {
  return (
    <div className="App">
      <Logo />
      <Row style={{ height: "100vh" }} className="remove-padding-margin ">
        <Col
          md="9"
          className="remove-padding-margin"
          style={{
            backgroundColor: "#EFEFEB",
            height: "100vh",
            position: "fixed"
          }}
        >
          <GoogleMapsTrack />
        </Col>
        <Col
          md="3"
          className="remove-padding-margin"
          style={{ position: "absolute", right: "0", height: "100%" }}
        >
          <TruckSettings />
        </Col>
      </Row>
    </div>
  );
};

export default UserView;
