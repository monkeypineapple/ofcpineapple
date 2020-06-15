import React from "react";
import { Container, Button } from "react-bootstrap";
// import GameBoardRow from "../GameBoardRow/GameBoardRow";
import { connect } from "react-redux";
import { initialDeal } from "../../actions/cardStatus";
import { removeCards } from "../../actions/deck";
import PlayerOneRowThree from "../PlayerOneRowThree/PlayerOneRowThree.js";
import PlayerTwoRowThree from "../PlayerTwoRowThree/PlayerTwoRowThree.js";
import { Row, Col } from "react-bootstrap";

const GameBoard = ({ deck, initialDeal, removeCards, board }) => {
  const handleInitialDealButtonClick = () => {
    initialDeal(deck.slice(0, 10));
    removeCards(10);
  };

  return (
    <Container>
      <Button onClick={handleInitialDealButtonClick}>DEAL!</Button>
      <Row className="row-three">
        <Col className="p1-r3-col">
          <Row>
            <PlayerOneRowThree cards={board.playerOne.rowThree} />
          </Row>
        </Col>
        <Col ></Col>
        <Col className="p2-r3-col">
          <Row>
            <PlayerTwoRowThree cards={board.playerTwo.rowThree} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    board: state.cardStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialDeal: (deck) => dispatch(initialDeal(deck)),
    removeCards: (n) => dispatch(removeCards(n)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
