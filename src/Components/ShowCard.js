import React from "react";

function ShowCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <img
          src={props.show.image.original}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.show.name}</h5>
          <p className="card-text">{props.show.summary}</p>
          <a
            href={props.show.url}
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
