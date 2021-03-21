import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Character from "../components/Character";
import Home from "../components/Home";
import Location from "../components/Location";

export default function Routes() {
  return (
    <Router>
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/character/:id" exact>
          <Character />
        </Route>
        <Route path="/location/:id" exact>
          <Location />
        </Route>
      </div>
    </Router>
  )
}
