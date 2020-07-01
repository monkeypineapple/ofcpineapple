import React from "react";
import PlayingCard from "../PlayingCard/PlayingCard.js";
import { Col } from "react-bootstrap";
import "../App/App.css";

const PlayerOneRowOne = (props) => {
 

  

  return (
    <>
      <Col className="col-margins">
        <PlayingCard slotInfo={{
            isHand: false,
            isPlayerOne: true,
            isDiscard: false,
            row: 1,
            col: 1,
          }} card={props.cards["1"]} />
      </Col>
      <Col className="col-margins">
        <PlayingCard
          slotInfo={{
            isHand: false,
            isPlayerOne: true,
            isDiscard: false,
            row: 1,
            col: 2,
          }}
          card={props.cards["2"]}
        />
      </Col>
      <Col className="col-margins">
        <PlayingCard
          slotInfo={{
            isHand: false,
            isPlayerOne: true,
            isDiscard: false,
            row: 1,
            col: 3,
          }}
          card={props.cards["3"]}
        />
      </Col>
      <Col className="col-margins"></Col>
      <Col className="col-margins"></Col>
    </>
  );
};

export default PlayerOneRowOne;
