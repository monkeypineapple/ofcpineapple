import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Hand.css";
import PlayingCard from "../PlayingCard/PlayingCard";

function Hand({ cards }) {
  return (
    <Row>
      <Col></Col>
      <Col>
        <PlayingCard card={cards["1"]} />
      </Col>
      <Col>
        <PlayingCard card={cards["2"]} />
      </Col>
      <Col>
        <PlayingCard card={cards["3"]} />
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Hand;
