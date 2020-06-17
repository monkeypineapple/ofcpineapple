import React from "react";
import Header from "../Header/Header";
import GameBoard from "../GameBoard/GameBoard";
import {Row } from 'react-bootstrap'
import "./App.css"

const App = () => {
  return (
    <>
      <Row>
        <Header></Header>
      </Row>
      <Row className="game-board-row">
        <GameBoard></GameBoard>
      </Row>
    </>
  );
};

export default App;

// App
// Header
// GameBoard
// Player rows (Front, Middle, Back)
// Card
// Hand
// Card
