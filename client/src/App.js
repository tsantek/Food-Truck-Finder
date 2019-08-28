import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import api from "./api/api";
import SearchContainer from "./component/SearchContainer";
import GoogleMaps from "./component/maps/GoogleMaps";
import { Row, Col } from "reactstrap";
import Logo from "./component/logo/Logo";

function App() {
  useEffect(() => {
    api.get("/users").then(response => console.log(response));
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Logo />
        <Row style={{ height: "100vh" }}>
          <Col md="9" className="remove-padding-margin">
            <GoogleMaps />
          </Col>
          <Col md="3" className="remove-padding-margin">
            <SearchContainer />
          </Col>
        </Row>
      </div>
      ]
    </Provider>
  );
}

export default App;
