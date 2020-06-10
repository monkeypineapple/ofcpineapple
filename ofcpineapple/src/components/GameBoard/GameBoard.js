import React from "react";
import { Container } from "react-bootstrap";
import GameBoardRow from "../GameBoardRow/GameBoardRow";
import { connect } from 'react-redux'

const GameBoard = ({ deck }) => {
  return (
    <Container>
      <GameBoardRow deck={deck.slice(0, 11)} rowId="top-row"></GameBoardRow>
      <GameBoardRow deck={deck.slice(0, 11)} rowId="middle-row"></GameBoardRow>
      <GameBoardRow deck={deck.slice(0, 11)} rowId="bottom-row"></GameBoardRow>
    </Container>
  );
};
 
const mapStateToProps = (state) => {
  return {
    deck: state.deck
  }
}

export default connect(mapStateToProps)(GameBoard);
