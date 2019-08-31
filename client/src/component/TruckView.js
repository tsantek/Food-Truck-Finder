import React, { useEffect, useState } from "react";
import GoogleMapsTrack from "./maps/GoogleMapsTrack";
import { Row, Col } from "reactstrap";
import Logo from "./logo/Logo";
import TruckSettings from "./foodtrucklocator/TruckSettings";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../redux/actions";
import { setLocation, getAllLocations, deleteLocation } from "../api/api";
import { withRouter } from "react-router-dom";

const UserView = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const [position, setPositionState] = useState([]);
  const [stops, setStops] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      history.push("/trucklogin");
    } else {
      dispatch(getUserInfo(JSON.parse(localStorage.getItem("user"))));
      getAllLocations("http://localhost:8080/api/v1/location")
        .then(res => setStops(res))
        .catch(error => console.error(console.error()));
    }
  }, []);

  const setPosition = e => {
    setPositionState({ lat: e.lat, lng: e.lng });
  };

  const setLocationTime = time => {
    const data = {
      ...position,
      ...time
    };
    let newStops = [...stops, data];
    setStops(newStops);

    if (!position) {
      alert("Please select location on map");
    } else {
      setLocation(`http://localhost:8080/api/v1/location/`, data)
        .then(res => console.log(res))
        .catch(error => console.error(console.error()));
    }
  };

  const deleteStop = id => {
    console.log(id);
    deleteLocation(`http://localhost:8080/api/v1/location/delete/${id}`)
      .then(res => {
        let newStops = stops.filter(stop => stop.id !== id);
        setStops(newStops);
      })
      .catch(error => console.error(console.error()));
  };

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
          <GoogleMapsTrack setPosition={setPosition} stops={stops} />
        </Col>
        <Col
          md="3"
          className="remove-padding-margin"
          style={{ position: "absolute", right: "0", height: "100%" }}
        >
          <TruckSettings
            setLocation={setLocationTime}
            stops={stops}
            deleteLocation={deleteStop}
          />
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(UserView);
