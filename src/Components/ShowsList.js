import React, { Component } from "react";

//Components
import ShowCard from "./ShowCard";

//Redux
import { connect } from "react-redux";

class ShowsList extends Component {
  render() {
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
