import React from "react";
import { Accordion } from "react-bootstrap";

//Components
import SeasonRow from "./SeasonRow";

function Seasons(props) {
  let rows = props.seasons.map((season, i) => (
    <SeasonRow season={season} key={season[0].id} id={i} />
  ));
  return <Accordion defaultActiveKey="0">{rows}</Accordion>;
}

export default Seasons;
