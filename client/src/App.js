import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import api from "./api/api";
import SearchContainer from "./component/SearchContainer";
import GoogleMaps from "./component/maps/GoogleMaps";

function App() {
  useEffect(() => {
    api.get("/users").then(response => console.log(response));
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <SearchContainer />
        <GoogleMaps />
      </div>
    </Provider>
  );
}

export default App;
