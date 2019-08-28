import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";
import Marker from "./Marker";

class GoogleMaps extends Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
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
          <Marker lat={33.438572} lng={-112.048075} text="My Marker" />
          <Marker lat={33.428572} lng={-112.048075} text="My Marker" />
          <Marker lat={33.418572} lng={-112.048075} text="My Marker" />
          <Marker lat={33.438572} lng={-112.068075} text="My Marker" />
          <Marker lat={33.428572} lng={-112.058075} text="My Marker" />
          <Marker lat={33.418572} lng={-112.078075} text="My Marker" />
        </GoogleMapReact>
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 3000
})(GoogleMaps);
