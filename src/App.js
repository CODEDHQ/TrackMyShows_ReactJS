import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Components
import ShowDetail from "./Components/ShowDetail";
import HomePage from "./Components/HomePage";
import TopNavBar from "./Components/TopNavBar";
import EpisodeDetail from "./Components/EpisodeDetail";

//Data
import shows from "./Data/shows";
import episodes from "./Data/episodes";

function App() {
  return (
    <div>
      <TopNavBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/show/:showID"
          render={props => <ShowDetail {...props} shows={shows} />}
        />
        <Route
          path="/episode/:episodeID"
          render={props => <EpisodeDetail {...props} episodes={episodes} />}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
