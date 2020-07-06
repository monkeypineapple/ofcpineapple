import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Hand.css";
import PlayingCard from "../PlayingCard/PlayingCard";

function Hand({ cards }) {
  return (
    <Row>
      <Col></Col>
      <Col>
        <PlayingCard slotInfo={{
            isHand: true,
            isPlayerOne: false,
            isDiscard: false,
            row: 1,
            col: 1,
          }} card={cards["1"]} />
      </Col>
      <Col>
        <PlayingCard slotInfo={{
            isHand: true,
            isPlayerOne: false,
            isDiscard: false,
            row: 1,
            col: 2,
          }} card={cards["2"]} />
      </Col>
      <Col>
        <PlayingCard slotInfo={{
            isHand: true,
            isPlayerOne: false,
            isDiscard: false,
            row: 1,
            col: 3,
          }} card={cards["3"]} />
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Hand;
