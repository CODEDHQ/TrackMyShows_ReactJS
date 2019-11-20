import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Episodes({ episodes }) {
  // Props fix and changed the name of the variable so it doesn't get confusing
  let episodesRow = episodes.map((episode, i) => (
    <tr key={episode.id}>
      <td>
        <Link to={`/episode/${episode.id}`}>{`Episode ${++i}: ${
          episode.name
        }`}</Link>
      </td>
    </tr>
  ));
  return (
    <Table hover>
      <tbody>{episodesRow}</tbody>
    </Table>
  );
}

export default Episodes;
