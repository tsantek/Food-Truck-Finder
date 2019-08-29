import React, { useEffect } from "react";
import SearchContainer from "./SearchContainer";
import GoogleMaps from "./maps/GoogleMaps";
import { Row, Col } from "reactstrap";
import Logo from "./logo/Logo";
import { getAllFoodTrucks } from "../api/api";

const UserView = () => {
  useEffect(() => {
    getAllFoodTrucks("http://localhost:8080/api/v1/foodtruck").then(res =>
      console.log(res)
    );
  }, []);

  return (
    <div className="App">
      <Logo />
      <Row style={{ height: "100vh" }}>
        <Col
          md="9"
          className="remove-padding-margin"
          style={{
            backgroundColor: "#EFEFEB",
            height: "100vh"
          }}
        >
          <GoogleMaps />
        </Col>
        <Col
          md="3"
          className="remove-padding-margin"
          style={{ height: "100vh" }}
        >
          <SearchContainer />
        </Col>
      </Row>
    </div>
  );
};

export default UserView;
