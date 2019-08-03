import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//Components
// import ShowsList from "./Components/ShowsList";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
      {/* <Route path="/showsList" component={ShowsList} /> */}
      <Redirect to="/home" />
    </Switch>
  );
}

export default withRouter(App);
