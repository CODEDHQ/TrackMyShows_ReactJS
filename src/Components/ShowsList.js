import React from "react";

//Components
import ShowCard from "./ShowCard";

function ShowsList({ filteredShows }) {
  let showCards = filteredShows.map(show => (
    <ShowCard show={show} key={show.id} />
  ));
  return <div className="row">{showCards}</div>;
}

export default ShowsList;
