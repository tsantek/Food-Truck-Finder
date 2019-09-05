import React from "react";
import { Button, Form } from "reactstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchContainer = props => {
  const user = useSelector(state => state.payload);
  const { history, setLocation, stops, deleteLocation } = props;

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let fullDate = day.toString() + month.toString() + year.toString();

  const logout = () => {
    history.push("/trucklogin");
    localStorage.clear();
  };

  const setLocationTime = e => {
    e.preventDefault();
    setLocation({
      location_date: fullDate,
      location_time_start: e.target.timeFrom.value,
      location_time_end: e.target.timeTo.value,
      truck_id: user.id
    });

    e.target.reset();
  };

  const convertTime = time => {
    let timeSplited = time.split(":");
    let fullTime;

    if (timeSplited[0] > 12) {
      fullTime =
        (timeSplited[0] - 12).toString() + ":" + timeSplited[1] + " PM";
    } else if (timeSplited[0] === 24) {
      fullTime = time + " PM";
    } else {
      fullTime = time + " AM";
    }
    return fullTime;
  };

  return (
    <div className="truck-info-container">
      <div className="menu-container">
        <div className="title-name-header">Food Truck Finder </div>
        <Link
          to="/truckprofile"
          className="button-login"
          style={{ marginRight: "10px" }}
        >
          <img
            alt="logo"
            className="unknown-user"
            src={user ? user.img : "./img/user.png"}
            height="100px"
          />
        </Link>
      </div>
      <ul className="truck-menu">
        <li onClick={() => logout()}>Logout</li>
      </ul>

      <div className="card" style={{ padding: "5px" }}>
        <Form onSubmit={e => setLocationTime(e)}>
          <p>Add new stop</p>
          <span className="form-add-new-stop-label">From</span>
          <input
            required
            className="input-add-new-stop"
            name="timeFrom"
            type="time"
          />

          <span className="form-add-new-stop-label">To</span>

          <input
            required
            className="input-add-new-stop"
            name="timeTo"
            type="time"
          />
          <div className="submit-btn-form-add-new-stop">
            <p style={{ marginTop: "5px" }}> Select location on the map...</p>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
      {stops
        .filter(
          stop => stop.truck_id === user.id && stop.location_date === fullDate
        )
        .map(stop => (
          <div className="card" key={stop.id}>
            <div className="card-text" style={{ padding: "10px" }}>
              <p className="truck-time-today">
                From {convertTime(stop.location_time_start)}
                <span> </span>
                To {convertTime(stop.location_time_end)}
              </p>
              <div className="stop-delete-button">
                <Button color="link" onClick={() => deleteLocation(stop.id)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default withRouter(SearchContainer);
