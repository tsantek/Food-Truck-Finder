import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";

import MyLocation from "./MyLocation";
import MapLoader from "../maps/MapLoader";

class FoodTruckLocator extends Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <MapLoader />
    ) : this.props.coords ? (
      // when I have geolocation

      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_SECRET_CODE }}
          defaultCenter={{
            lat: this.props.coords.latitude,
            lng: this.props.coords.longitude + 0.02
          }}
          defaultZoom={13}
          defaultOptions={{ fullscreenControl: false }}
          onClick={e => console.log(e)}
        >
          <MyLocation
            lat={this.props.coords.latitude}
            lng={this.props.coords.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    ) : (
      <MapLoader />
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 3000
})(FoodTruckLocator);
