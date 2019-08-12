import React, { Component } from "react";
import { Link } from "react-router-dom";

//Redux
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";

class TopNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <Link className="navbar-brand" to="/home">
          HOME
        </Link>
        <div>
          {!this.props.user ? (
            <div className="float-right">
              <Link to="/login" className="btn btn-link">
                Login
              </Link>
              <Link to="/signup" className="btn btn-link">
                Signup
              </Link>
            </div>
          ) : (
            <div>
              <span>{this.props.user.username}</span>
              <button className="btn btn-link" onClick={this.props.logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
