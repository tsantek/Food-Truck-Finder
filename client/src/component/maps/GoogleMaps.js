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

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: this.props.coords.latitude,
            lng: this.props.coords.longitude
          }}
          defaultZoom={13}
          defaultOptions={{ fullscreenControl: false }}
        >
          <Marker lat={33.438572} lng={-112.048075} text="My Marker" />
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
