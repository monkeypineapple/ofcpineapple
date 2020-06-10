import React from "react";
import Header from "../Header/Header";
import GameBoard from "../GameBoard/GameBoard";
import { Container, Row } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
      <Row>
        <Header></Header>
      </Row>
      <Row>
        <GameBoard></GameBoard>
      </Row>
    </Container>
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
