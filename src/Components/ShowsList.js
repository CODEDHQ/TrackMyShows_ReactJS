import React, { Component } from "react";
import ShowCard from "./ShowCard";

import { connect } from "react-redux";

class ShowsList extends Component {
  render() {
    console.log(this.props.filteredShows);
    let showCards = this.props.filteredShows.map(show => (
      <ShowCard show={show} key={show.id} />
    ));
    return <div className="row">{showCards}</div>;
  }
}

const mapStateToProps = state => {
  return {
    filteredShows: state.shows.filteredShows
  };
};

export default connect(mapStateToProps)(ShowsList);
