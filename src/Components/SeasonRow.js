import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

//Components
import Episodes from "./Episodes";

function SeasonRow(props) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={props.id}>
          Season {props.season[0].season}
        </Accordion.Toggle>
        <span className="float-right">{props.season.length} Episodes</span>
      </Card.Header>
      <Accordion.Collapse eventKey={props.id}>
        <Card.Body>
          <Episodes episodes={props.season} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default SeasonRow;
