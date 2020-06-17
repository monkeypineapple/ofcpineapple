import produce from "immer";
import { REMOVE_CARDS } from "../actions/types";

const initialDeckState = [
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "../assets/KS.png",
    faceDownImg: "../assets/EmptySlot.png"
  }
];

export default produce((state, action) => {
  switch (action.type) {
    case REMOVE_CARDS:
      state.splice(state.length - 1 - action.payload, 10);
      return;
    default:
      return;
  }
}, initialDeckState);
