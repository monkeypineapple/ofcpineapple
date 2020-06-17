import React from "react";
import { Card } from "react-bootstrap";
import "./PlayingCard.css";

const PlayingCard = ({ card, className }) => {
  if (card) {
    return (
      <Card
        // we tried to make border; ternary not being used; but this allows custom style class name to be passed in
        className={
          !className
            ? "card-image-styles"
            : "card-image-styles" + " " + className
        }
      >
        {card.faceUp ? (
          <img alt="" className="card-image-styles" src={card.faceUpImg} />
        ) : (
          <img alt="" className={"card-image-styles"} src={card.faceDownImg} />
        )}
      </Card>
    );
  } else {
    return (
      <Card
        className={
          !className
            ? "card-image-styles"
            : "card-image-styles" + " " + className
        }
      >
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
