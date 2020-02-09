import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import LogInScreen from "./screens/authentication/LogInScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import EventScreen from "./screens/authentication/EventScreen";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route
              exact
              path="/"
              component={LogInScreen}
          />

          <Route
              exact
              path="/register"
              component={RegisterScreen}
          />

          <Route
              exact
              path="/events"
              component={EventScreen}
          />

        </Switch>
      </HashRouter>
  );
}

export default App;
