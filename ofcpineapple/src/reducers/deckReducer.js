import produce from "immer";
import { REMOVE_CARDS } from "../actions/types";
import _ from "underscore";

const initialDeckState = _.shuffle([
  {
    faceUp: true,
    location: {},
    value: 1,
    suit: "spades",
    faceUpImg: require("../assets/spades/1AS.png")
  },
  {
    faceUp: true,
    location: {},
    value: 2,
    suit: "spades",
    faceUpImg: require("../assets/spades/2S.png")
  },
  {
    faceUp: true,
    location: {},
    value: 3,
    suit: "spades",
    faceUpImg: require("../assets/spades/3S.png")
  },
  {
    faceUp: true,
    location: {},
    value: 4,
    suit: "spades",
    faceUpImg: require("../assets/spades/4S.png")
  },
  {
    faceUp: true,
    location: {},
    value: 5,
    suit: "spades",
    faceUpImg: require("../assets/spades/5S.png")
  },
  {
    faceUp: true,
    location: {}
    value: 6,
    suit: "spades",
    faceUpImg: require("../assets/spades/6S.png")
  },
  {
    faceUp: true,
    location: {}
    value: 7,
    suit: "spades",
    faceUpImg: require("../assets/spades/7S.png")
  },
  {
    faceUp: true,
    location: {},
    value: 8,
    suit: "spades",
    faceUpImg: require("../assets/spades/8S.png")
  },
  {
    faceUp: true,
    location: {},
    value: 9,
    suit: "spades",
    faceUpImg: require("../assets/spades/9S.png")
  },
  {
    faceUp: true,
    location: {},
    value: 10,
    suit: "spades",
    faceUpImg: require("../assets/spades/10S.png")
  },
  {
    faceUp: true,
    location: {},
    value: 11,
    suit: "spades",
    faceUpImg: require("../assets/spades/11JS.png")
  },
  {
    faceUp: true,
    location: {},
    value: 12,
    suit: "spades",
    faceUpImg: require("../assets/spades/12QS.png")
  },
  {
    faceUp: true,
    location: {},
    value: 13,
    suit: "spades",
    faceUpImg: require("../assets/spades/KS.png")
  },
  {
    faceUp: true,
    location: {},
    value: 1,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/1AH.png")
  },
  {
    faceUp: true,
    location: {},
    value: 2,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/2H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 3,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/3H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 4,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/4H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 5,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/5H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 6,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/6H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 7,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/7H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 8,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/8H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 9,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/9H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 10,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/10H.png")
  },
  {
    faceUp: true,
    location: {},
    value: 11,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/11JH.png")
  },
  {
    faceUp: true,
    location: {},
    value: 12,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/12QH.png")
  },
  {
    faceUp: true,
    location: {},
    value: 13,
    suit: "hearts",
    faceUpImg: require("../assets/hearts/KH.png")
  },
  {
    faceUp: true,
    location: {},
    value: 1,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/1AC.png")
  },
  {
    faceUp: true,
    location: {},
    value: 2,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/2C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 3,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/3C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 4,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/4C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 5,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/5C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 6,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/6C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/7C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 8,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/8C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 9,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/9C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 10,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/10C.png")
  },
  {
    faceUp: true,
    location: {},
    value: 11,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/11JC.png")
  },
  {
    faceUp: true,
    location: {},
    value: 12,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/12QC.png")
  },
  {
    faceUp: true,
    location: {},
    value: 13,
    suit: "clubs",
    faceUpImg: require("../assets/clubs/KC.png")
  },
  {
    faceUp: true,
    location: {},
    value: 1,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/1AD.png")
  },
  {
    faceUp: true,
    location: {},
    value: 2,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/2D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 3,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/3D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 4,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/4D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 5,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/5D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 6,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/6D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 7,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/7D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 8,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/8D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 9,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/9D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 10,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/10D.png")
  },
  {
    faceUp: true,
    location: {},
    value: 11,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/11JD.png")
  },
  {
    faceUp: true,
    location: {},
    value: 12,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/12QD.png")
  },
  {
    faceUp: true,
    location: {},
    value: 13,
    suit: "diamonds",
    faceUpImg: require("../assets/diamonds/KD.png")
  },
]);

export default produce((state, action) => {
  switch (action.type) {
    case REMOVE_CARDS:
      state.splice(state.length - 1 - action.payload, 10);
      return;
    default:
      return;
  }
}, initialDeckState);
