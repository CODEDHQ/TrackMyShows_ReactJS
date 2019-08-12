import React, { Component } from "react";

// Components
import Seasons from "./Seasons";
import Loading from "./Loading";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class ShowDetail extends Component {
  componentDidMount() {
    this.props.getShow(this.props.match.params.showID);
  }
  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const show = this.props.show;
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
              <Seasons seasons={this.props.seasons} />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    show: state.shows.selectedShow,
    seasons: state.shows.seasons,
    loading: state.shows.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShow: showID => dispatch(actionCreators.getShowDetail(showID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetail);
