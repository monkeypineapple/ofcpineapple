import React from "react";
import { Container, Button } from "react-bootstrap";
// import GameBoardRow from "../GameBoardRow/GameBoardRow";
import { connect } from "react-redux";
import { initialDeal, fillHand } from "../../actions/cardStatus";
import { removeCards } from "../../actions/deck";
import PlayerOneRowThree from "../PlayerOneRowThree/PlayerOneRowThree.js";
import PlayerOneRowTwo from "../PlayerOneRowTwo/PlayerOneRowTwo.js";
import PlayerOneRowOne from "../PlayerOneRowOne/PlayerOneRowOne.js";
import PlayerTwoRowThree from "../PlayerTwoRowThree/PlayerTwoRowThree.js";
import PlayerTwoRowTwo from "../PlayerTwoRowTwo/PlayerTwoRowTwo.js";
import PlayerTwoRowOne from "../PlayerTwoRowOne/PlayerTwoRowOne.js";
import { Row, Col } from "react-bootstrap";
import "./GameBoard.css";
import Hand from "../Hand/Hand";

const GameBoard = ({ deck, initialDeal, fillHand, removeCards, board }) => {
  const handleInitialDealButtonClick = () => {
    initialDeal(deck.slice(0, 10));
    removeCards(10);
  };
  const handleFillHandClick = () => {
    fillHand(deck.slice(0, 3)); // fill the hand
    removeCards(3); // remove the cards given to fillHand from deck
  };

  return (
    <Container fluid>
      <Button onClick={handleInitialDealButtonClick}>DEAL!</Button>
      <Button onClick={handleFillHandClick}>Fill Hand!</Button>
      <Row className="row-one">
        <Col className="p1-r1-col">
          <Row className="p1-r1">
            <PlayerOneRowOne cards={board.playerOne.rowOne} />
          </Row>
        </Col>
        <Col>
          <Hand cards={board.hand} />
        </Col>
        <Col className="p2-r1-col">
          <Row className="p2-r1">
            <PlayerTwoRowOne cards={board.playerTwo.rowOne} />
          </Row>
        </Col>
      </Row>
      <Row className="row-two">
        <Col className="p1-r2-col">
          <Row className="p1-r2">
            <PlayerOneRowTwo cards={board.playerOne.rowTwo} />
          </Row>
        </Col>
        <Col></Col>
        <Col className="p2-r2-col">
          <Row className="p2-r2">
            <PlayerTwoRowTwo cards={board.playerTwo.rowTwo} />
          </Row>
        </Col>
      </Row>
      <Row className="row-three">
        <Col className="p1-r3-col">
          <Row className="p1-r3">
            <PlayerOneRowThree cards={board.playerOne.rowThree} />
          </Row>
        </Col>
        <Col></Col>
        <Col className="p2-r3-col">
          <Row className="p2-r3">
            <PlayerTwoRowThree cards={board.playerTwo.rowThree} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    deck: state.deck,
    board: state.cardStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initialDeal: deck => dispatch(initialDeal(deck)),
    removeCards: n => dispatch(removeCards(n)),
    fillHand: hand => dispatch(fillHand(hand))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
