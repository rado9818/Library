import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import LogInScreen from "./screens/authentication/LogInScreen";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route
              exact
              path="/"
              component={LogInScreen}
          />

        </Switch>
      </HashRouter>
  );
}

export default App;
