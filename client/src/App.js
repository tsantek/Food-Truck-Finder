import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserView from "./component/UserView";
import Login from "./component/Login";
import TruckLogin from "./component/TruckLogin";
import TruckView from "./component/TruckView";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/userview" component={UserView} />
          <Route path="/trackview" component={TruckView} />
          <Route path="/trucklogin" component={TruckLogin} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
