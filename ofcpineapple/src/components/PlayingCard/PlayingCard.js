import React from "react";
import { Card } from "react-bootstrap";
import "./PlayingCard.css";

const PlayingCard = ({ card }) => {
  if (card) {
    return (
      <Card>
        {card.faceUp ? (
          <img
            alt=""
            className="card-img-styles"
            height="80px"
            width="70px"
            src={require("../../EmptySlot.png")}
          />
        ) : (
          <img
            alt=""
            height="80px"
            width="70px"
            src={require("../../EmptySlot.png")}
          />
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
