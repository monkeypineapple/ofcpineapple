import produce from "immer";
import { REMOVE_CARDS } from "../actions/types";

const initialDeckState = [
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: require("../assets/KS.png"),
    faceDownImg:
      require("../assets/EmptySlot.png"),
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg:
      "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
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
