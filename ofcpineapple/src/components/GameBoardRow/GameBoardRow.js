import React from "react";
import { Row, Col } from "react-bootstrap";
import PlayingCard from '../PlayingCard/PlayingCard.js'

const GameBoardRow = ({ deck }) => {
//   const columnInfo = [
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false },
//     { isBackgroundSpace: true, card: null, isHand: false }
//   ];


  return (
    <Row>
      {deck.map(card => {
          return (
          <Col>{card ? <PlayingCard  card={card} ></PlayingCard> : null }</Col>
          )
      })}
    </Row>
  );
};

export default GameBoardRow;
