import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <Link className="navbar-brand" to="/home">
          HOME
        </Link>
      </nav>
    );
  }
}

export default TopNavBar;
