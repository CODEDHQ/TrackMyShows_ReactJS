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
              <Link to="/login" className="btn btn-info m-2">
                Login
              </Link>
              <Link to="/signup" className="btn btn-success m-2">
                Signup
              </Link>
            </div>
          ) : (
            <button className="btn btn-danger m-2 " onClick={this.props.logout}>
              Logout {this.props.user.username}
            </button>
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
