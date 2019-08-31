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
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
