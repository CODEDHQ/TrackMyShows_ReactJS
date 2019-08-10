import React from "react";
import SeasonRow from "./SeasonRow";

function Seasons(props) {
  let rows = props.seasons.map((season, id = 1) => (
    <SeasonRow season={season} key={season[0].id} id={season[0].id} />
  ));
  return (
    <div className="accordion" id="accordionExample">
      {rows}
    </div>
  );
}

export default Seasons;
