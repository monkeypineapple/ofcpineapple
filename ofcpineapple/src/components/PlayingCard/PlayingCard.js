import React from "react";
import { Card } from "react-bootstrap";


const PlayingCard = ({ card }) => {
  return (
    <Card style={{ width: "18rem" }}>
      {card.faceUp ? (
        <img alt='' src={card.faceUpImg} />
      ) : (
        <img alt='' src={card.faceDown} />
      )}
    </Card>
  );
};

export default PlayingCard;
