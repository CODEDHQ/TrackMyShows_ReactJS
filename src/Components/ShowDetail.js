import React, { Component } from "react";

// Components
import Seasons from "./Seasons";
import Loading from "./Loading";

class ShowDetail extends Component {
  state = {
    selectedShow: null,
    loading: true
  };

  componentDidMount() {
    this.getShow(this.props.match.params.showID);
  }

  getShow(showID) {
    const show = this.props.shows.find(show => show.id === +showID);
    if (show) {
      this.setState({
        selectedShow: show,
        loading: false
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      const show = this.state.selectedShow;
      const showName = `${show.name}`;
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h3>{showName}</h3>
              <img
                src={show.image.original}
                className="img-thumbnail img-fluid"
                alt={showName}
              />
            </div>
            <div className="col">
              <h3>Summary:</h3>
              <p>{show.summary}</p>
              <h3>Seasons:</h3>
              <Seasons seasons={show.seasons} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ShowDetail;
