import React from "react";
import { Card } from "react-bootstrap";
import "./PlayingCard.css";
import { getLocationInfo } from "../../utilities/utils";
import { connect } from "react-redux";
import { setSelectedCard } from "../../actions/cardStatus";

const PlayingCard = ({ card, className, data, setSelectedCard }) => {
  const handleLocationClick = () => {
    let cardLocation = getLocationInfo(card.id, data);
    setSelectedCard({ card: card });
  };

  const highlightSelectedCard = () => {
    return data.selectedCard.card && data.selectedCard.card.id === card.id
      ? "selected-card-style"
      : "";
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
        <img alt="" className={"card-image-styles" + ' ' + highlightSelectedCard()} src={card.faceUpImg} />
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
    data: state.cardStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCard: (cardInfo) => dispatch(setSelectedCard(cardInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayingCard);
