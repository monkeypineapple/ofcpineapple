import React from "react";
import PlayingCard from "../PlayingCard/PlayingCard.js"
import { Col } from 'react-bootstrap'
import "../App/App.css"


const PlayerOneRowTwo = (props) => {
  console.log(props.cards)
  return (
    <>
      <Col className="col-margins"><PlayingCard card={props.cards["1"]} /></Col>
      <Col className="col-margins"><PlayingCard card={props.cards["2"]} /></Col>
      <Col className="col-margins"><PlayingCard card={props.cards["3"]} /></Col>
      <Col className="col-margins"><PlayingCard card={props.cards["4"]} /></Col>
      <Col className="col-margins"><PlayingCard card={props.cards["5"]} /></Col>
    </>
  )
}

export default PlayerOneRowTwo