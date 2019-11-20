import React from "react";

//Components
import ShowCard from "./ShowCard";

function ShowsList({ filteredShows }) {
  // Khalid If you are using only one/few props you can just extract it like this (im nat sure if its called extract)
  let showCards = filteredShows.map(show => (
    <ShowCard show={show} key={show.id} />
  ));
  return <div className="row">{showCards}</div>;
}

export default ShowsList;
