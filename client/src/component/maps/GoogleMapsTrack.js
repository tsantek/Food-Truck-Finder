import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";
import MyLocation from "./MyLocation";
import MapLoader from "./MapLoader";
import TruckMarker from "./TruckMarker";

class GoogleMaps extends Component {
  render() {
    const { setPosition, stops, position, user } = this.props;

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fullDate = day.toString() + month.toString() + year.toString();
    console.log(stops);
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <MapLoader />
    ) : this.props.coords ? (
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_SECRET_CODE }}
          defaultCenter={{
            lat: this.props.coords.latitude,
            lng: this.props.coords.longitude + 0.02
          }}
          defaultZoom={13}
          defaultOptions={{ fullscreenControl: false }}
          onClick={e => setPosition(e)}
        >
          <MyLocation
            lat={this.props.coords.latitude}
            lng={this.props.coords.longitude}
          />

          {stops
            .filter(
              stop =>
                stop.truck_id === user.id && stop.location_date === fullDate
            )
            .map(stop => (
              <TruckMarker lat={stop.lat} lng={stop.lng} />
            ))}
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
})(GoogleMaps);
