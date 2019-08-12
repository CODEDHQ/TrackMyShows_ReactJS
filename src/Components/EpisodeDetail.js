import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
// import * as actionCreators from "../Store/actions";

class EpisodeDetail extends Component {
  state = {
    episode: {}
  };
  componentDidMount() {
    console.log(this.props.seasons);
    const ep = this.props.seasons.forEach(season => {
      return season.find(
        episode => episode.id === this.props.match.params.episodeID
      );
    });
    console.log(ep);
  }
  render() {
    // const episode = this.props.episode;
    // const episodeName = `${episode.name}`;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3>episodeName</h3>
            <img
              src="episode.image.original"
              className="img-thumbnail img-fluid"
              alt="episodeName"
            />
          </div>
          <div className="col">
            <h3>Summary:</h3>
            <p>episode.summary</p>
            <h3>Reviews:</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.shows.selectedShow,
    seasons: state.shows.seasons
  };
};

export default connect(
  mapStateToProps,
  null
)(EpisodeDetail);
