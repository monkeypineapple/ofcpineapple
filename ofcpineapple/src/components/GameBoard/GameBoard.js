import React from "react";
import { Container, Button } from "react-bootstrap";
import GameBoardRow from "../GameBoardRow/GameBoardRow";
import { connect } from "react-redux";
import { initialDeal } from '../../actions/cardStatus'
const GameBoard = ({ deck, bottomRow }) => {
  const handleInitialDealButtonClick = () => {
    bottomRow(deck.slice(0,10))
  }
  return (
    <Container>
      <Button onClick={handleInitialDealButtonClick} >DEAL!</Button>
      {/* <GameBoardRow deck={deck.slice(0, 11)} rowId="top-row"></GameBoardRow>
      <GameBoardRow deck={deck.slice(0, 11)} rowId="middle-row"></GameBoardRow>
      <GameBoardRow deck={deck.slice(0, 11)} rowId="bottom-row"></GameBoardRow> */}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bottomRow: deck => dispatch(initialDeal(deck))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
