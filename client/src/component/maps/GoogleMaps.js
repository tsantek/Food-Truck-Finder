import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";
import Marker from "./Marker";
import MyLocation from "./MyLocation";
import MapLoader from "./MapLoader";

class GoogleMaps extends Component {
  render() {
    const { locations, trucks } = this.props;

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
          onClick={e => console.log(e)}
        >
          <MyLocation
            lat={this.props.coords.latitude}
            lng={this.props.coords.longitude}
            text="My Marker"
          />
          {locations.map(location => (
            <Marker
              key={location.id}
              lat={location.lat}
              lng={location.lng}
              truck={trucks.find(truck => truck.id === location.truck_id)}
              location={location}
            />
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
