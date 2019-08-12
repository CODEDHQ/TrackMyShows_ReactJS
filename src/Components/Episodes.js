import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Episodes(props) {
  let episodes = props.episodes.map((episode, i) => (
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
      <tbody>{episodes}</tbody>
    </Table>
  );
}

export default Episodes;
