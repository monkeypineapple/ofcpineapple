import React from "react";
import PlayingCard from "../PlayingCard/PlayingCard.js"
import { Col } from 'react-bootstrap'


const PlayerTwoRowThree = (props) => {
  console.log(props.cards)
  return (
    <>
      <Col><PlayingCard card={props.cards["1"]} /></Col>
      <Col><PlayingCard card={props.cards["2"]} /></Col>
      <Col><PlayingCard card={props.cards["3"]} /></Col>
      <Col><PlayingCard card={props.cards["4"]} /></Col>
      <Col><PlayingCard card={props.cards["5"]} /></Col>
    </>
  )
}

export default PlayerTwoRowThree