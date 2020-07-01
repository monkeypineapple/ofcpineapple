import React from "react";
import PlayingCard from "../PlayingCard/PlayingCard.js"
import { Col } from 'react-bootstrap'
import "../App/App.css"


const PlayerOneRowThree = (props) => {
  
  return (
    <>
      <Col className="col-margins"><PlayingCard slotInfo={{
            isHand: false,
            isPlayerOne: true,
            isDiscard: false,
            row: 3,
            col: 1,
          }} card={props.cards["1"]} /></Col>
      <Col className="col-margins"><PlayingCard slotInfo={{
            isHand: false,
            isPlayerOne: true,
            isDiscard: false,
            row: 3,
            col: 2,
          }} card={props.cards["2"]} /></Col>
      <Col className="col-margins"><PlayingCard slotInfo={{
            isHand: false,
            isPlayerOne: true,
            isDiscard: false,
            row: 3,
            col: 3,
          }} card={props.cards["3"]} /></Col>
      <Col className="col-margins"><PlayingCard slotInfo={{
            isHand: false,
            isPlayerOne: true,
            isDiscard: false,
            row: 3,
            col: 4,
          }} card={props.cards["4"]} /></Col>
      <Col className="col-margins"><PlayingCard slotInfo={{
            isHand: false,
            isPlayerOne: true,
            isDiscard: false,
            row: 3,
            col: 5,
          }} card={props.cards["5"]} /></Col>
    </>
  )
}

export default PlayerOneRowThree