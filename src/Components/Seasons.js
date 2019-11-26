import React from "react";
import { Accordion } from "react-bootstrap";

//Components
import SeasonRow from "./SeasonRow";

function Seasons({ seasons }) {
  let rows = seasons.map((season, i) => (
    <SeasonRow season={season} key={season[0].id} id={i} />
  ));
  return <Accordion>{rows}</Accordion>;
}

export default Seasons;
