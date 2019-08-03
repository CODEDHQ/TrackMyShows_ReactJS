import React from "react";
import { Link } from "react-router-dom";

function TopNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <Link className="navbar-brand" to="/home">
        HOME
      </Link>
    </nav>
  );
}

export default TopNavBar;
