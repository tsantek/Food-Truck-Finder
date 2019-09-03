import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import GoogleMaps from "./maps/GoogleMaps";
import { Row, Col } from "reactstrap";
import Logo from "./logo/Logo";
import { getAllFoodTrucks, getAllLocations } from "../api/api";

const UserView = props => {
  const [trucks, setTrucks] = useState([]);
  const [locations, setLocations] = useState([]);
  const { history } = props;

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let fullDate = day.toString() + month.toString() + year.toString();

  useEffect(() => {
    if (!localStorage.getItem("client")) {
      history.push("/trucklogin");
    }

    getAllFoodTrucks("http://localhost:8080/api/v1/foodtruck").then(res =>
      setTrucks([
        ...res.map(truck => {
          return {
            ...truck
          };
        })
      ])
    );

    getAllLocations("http://localhost:8080/api/v1/location").then(res =>
      setLocations([
        ...res
          .filter(stop => stop.location_date === fullDate)
          .map(location => {
            return {
              ...location,
              focus: false
            };
          })
      ])
    );
  }, [fullDate, history]);

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
          <GoogleMaps trucks={trucks} locations={locations} />
        </Col>
        <Col
          md="3"
          className="remove-padding-margin"
          style={{ height: "100vh" }}
        >
          <SearchContainer
            trucks={trucks}
            locations={locations}
            setLocations={setLocations}
          />
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(UserView);
