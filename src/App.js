import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//Components
import ShowDetail from "./Components/ShowDetail";
import HomePage from "./Components/HomePage";
import TopNavBar from "./Components/TopNavBar";
import EpisodeDetail from "./Components/EpisodeDetail";
import SignupForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div>
      <TopNavBar />

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/show/:showID" component={ShowDetail} />
        <Route path="/episode/:episodeID" component={EpisodeDetail} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
