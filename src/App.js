import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//Components
import ShowDetail from "./Components/ShowDetail";
import HomePage from "./Components/HomePage";
import TopNavBar from "./Components/TopNavBar";

function App() {
  return (
    <div>
      <TopNavBar />

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/show/:showID" component={ShowDetail} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
