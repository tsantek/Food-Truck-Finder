import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserView from "./component/UserView";
import Login from "./component/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/userview" component={UserView} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
