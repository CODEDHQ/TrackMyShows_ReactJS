import React from "react";
import { Link } from "react-router-dom";

function ShowCard({ show }) {
  // Khalid Since you are only using one prop you can do that
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <img src={show.image.original} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{show.name}</h5>
          <p className="card-text">{show.summary}</p>
          <Link className="btn btn-md btn-info" to={`/show/${show.id}`}>
            More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
