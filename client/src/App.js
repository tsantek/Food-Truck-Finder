import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserView from "./component/UserView";
import Login from "./component/Login";
import TruckLogin from "./component/TruckLogin";
import TruckView from "./component/TruckView";
import { createBrowserHistory } from "history";
import Client from "./component/profiles/Client";
import Truck from "./component/profiles/Truck";

function App() {
  const browserHistory = createBrowserHistory();
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/userview" component={UserView} />
          <Route path="/trackview" component={TruckView} />
          <Route path="/trucklogin" component={TruckLogin} />
          <Route path="/profile" component={Client} />
          <Route path="/truckprofile" component={Truck} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
