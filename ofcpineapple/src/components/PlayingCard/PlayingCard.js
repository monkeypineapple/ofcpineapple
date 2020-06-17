import React from "react";
import { Card } from "react-bootstrap";

const PlayingCard = ({ card }) => {
  if (card) {
    return (
      <Card style={{ width: "10rem" }}>
        {card.faceUp ? (
          <img alt="" src={card.faceUpImg} />
        ) : (
          <img alt="" src={card.faceDown} />
        )}
      </Card>
    );
  } else {
    return (
      <Card style={{ width: "100%" }}>
        <img
          alt="empty slot"
          height="80px"
          width="70px"
          src={require("../../assets/EmptySlot.png")}
        ></img>
      </Card>
    );
  }
};

export default PlayingCard;
