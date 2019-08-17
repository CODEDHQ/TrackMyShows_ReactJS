import React, { Component } from "react";
import ShowsList from "./ShowsList";
import SearchBar from "./SearchBar";

//Data
import shows from "../Data/shows";

class HomePage extends Component {
  state = {
    filteredShows: shows
  };

  filterShows = query => {
    query = query.toLowerCase();
    let filteredShows = shows.filter(show => {
      return `${show.name}`.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredShows: filteredShows });
  };

  render() {
    return (
      <div className="container-responsive">
        <div className="col-12">
          <SearchBar filterShows={this.filterShows} />
          <ShowsList filteredShows={this.state.filteredShows} />
        </div>
      </div>
    );
  }
}

export default HomePage;
