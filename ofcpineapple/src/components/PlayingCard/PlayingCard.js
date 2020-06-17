import React from "react";
import { Card } from "react-bootstrap";

import "./PlayingCard.css"

const PlayingCard = ({ card }) => {
  if (card) {
    return (
      <Card >
        {card.faceUp ? (
          <img className="card-image-styles" alt="" src={card.faceUpImg} />
        ) : (
          <img className="card-image-styles" alt="" src={card.faceDown} />
        )}
      </Card>
    );
  } else {
    return (
      <Card >
        <img
          alt="empty slot"
          className="card-image-styles"
          src={require("../../assets/EmptySlot.png")}
        ></img>
      </Card>
    );
  }
};

export default PlayingCard;
