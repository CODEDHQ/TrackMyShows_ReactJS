import React, { Component } from "react";

//Components
import Loading from "./Loading";

class EpisodeDetail extends Component {
  state = {
    selectedEpisode: null,
    loading: true
  };

  componentDidMount() {
    this.getEpisode(this.props.match.params.episodeID);
  }

  getEpisode(episodeID) {
    const episode = this.props.episodes.find(
      episode => episode.id === +episodeID
    );
    if (episode) {
      this.setState({
        selectedEpisode: episode,
        loading: false
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      const episode = this.state.selectedEpisode;
      const episodeName = `${episode.name}`;
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h3>{episodeName}</h3>
              <img
                src={episode.image.original}
                className="img-thumbnail img-fluid"
                alt={episodeName}
              />
            </div>
            <div className="col">
              <h3>Summary:</h3>
              <p>{episode.summary}</p>
              <h5>Season: {episode.season}</h5>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default EpisodeDetail;
