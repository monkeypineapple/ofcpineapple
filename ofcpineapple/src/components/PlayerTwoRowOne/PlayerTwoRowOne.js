import React from "react";
import PlayingCard from "../PlayingCard/PlayingCard.js";
import { Col } from "react-bootstrap";
import "../App/App.css";

const PlayerTwoRowOne = (props) => {
  console.log(props.cards);
  return (
    <>
      <Col className="col-margins"></Col>
      <Col className="col-margins"></Col>
      <Col className="col-margins">
        <PlayingCard card={props.cards["1"]} />
      </Col>
      <Col className="col-margins">
        <PlayingCard card={props.cards["2"]} />
      </Col>
      <Col className="col-margins">
        <PlayingCard card={props.cards["3"]} />
      </Col>
    </>
  );
};

export default PlayerTwoRowOne;
