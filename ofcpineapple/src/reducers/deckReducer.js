import produce from "immer";
import { REMOVE_CARDS } from "../actions/types";
import _ from "underscore";

const initialDeckState = _.shuffle([
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  },
  {
    faceUp: false,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg: require("../assets/EmptySlot.png")
  }
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
