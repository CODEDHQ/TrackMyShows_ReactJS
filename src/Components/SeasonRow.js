import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

//Components
import Episodes from "./Episodes";

function SeasonRow({ season, id }) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={id}>
          Season {season[0].season}
        </Accordion.Toggle>
        <span className="float-right">{season.length} Episodes</span>
      </Card.Header>
      <Accordion.Collapse eventKey={id}>
        <Card.Body>
          <Episodes episodes={season} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default SeasonRow;
