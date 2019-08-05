import React, { Component } from "react";

// Components
// import Episodes from "./Episodes";
import Loading from "./Loading";

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
        <div className="">
          <div>
            <h3>{showName}</h3>
            <img
              src={show.image.original}
              className="img-thumbnail img-fluid"
              alt={showName}
            />
          </div>
          {/* <Episodes episodes={show._embedded.episodes} /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    show: state.shows.selectedShow,
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
