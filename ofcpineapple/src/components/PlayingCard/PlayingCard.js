import React from "react";
import { Card } from "react-bootstrap";
import "./PlayingCard.css";
import { getLocationInfo } from "../../utilities/utils";
import { connect } from "react-redux";

const PlayingCard = ({ card, className, data }) => {
  const handleLocationClick = () => {
  
  };
  if (card) {
    return (
      <Card
        // we tried to make border; ternary not being used; but this allows custom style class name to be passed in
        onClick={handleLocationClick}
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
        onClick={handleLocationClick}
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

const mapStateToProps = (state) => {
  return {
    data: state.cardStatus
  }
}

export default connect(mapStateToProps, null)(PlayingCard);
