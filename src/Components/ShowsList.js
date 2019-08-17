import React from "react";

//Components
import ShowCard from "./ShowCard";

function ShowsList(props) {
  let showCards = props.filteredShows.map(show => (
    <ShowCard show={show} key={show.id} />
  ));
  return <div className="row">{showCards}</div>;
}

export default ShowsList;
