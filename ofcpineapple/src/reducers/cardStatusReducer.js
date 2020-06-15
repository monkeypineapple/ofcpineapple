import {
  INITIAL_DEAL,
  REMOVE_HAND_CARD,
  CLEAR_HAND,
  REMOVE_PLAYER_CARD,
  FILL_HAND,
  ADD_PLAYER_CARD,
} from "../actions/types";
import produce from "immer";

const initialCardStatusState = {
  hand: {
    handCards: { 1: null, 2: null, 3: null },
  },
  playerOne: {
    rowOne: {
      1: null,
      2: null,
      3: null,
    },

    rowTwo: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    },

    rowThree: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    },
  },
  playerTwo: {
    rowOne: {
      1: null,
      2: null,
      3: null,
    },

    rowTwo: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    },

    rowThree: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    },
  },
};

// import produce from "immer"

// const byId = produce((draft, action) => {
//     switch (action.type) {
//         case RECEIVE_PRODUCTS:
//             action.products.forEach(product => {
//                 draft[product.id] = product
//             })
//     }
// }, {})
export default produce((state, action) => {
  switch (action.type) {
    case INITIAL_DEAL:
      
      state.playerOne.rowThree["1"] = action.payload[0];
      state.playerOne.rowThree["2"] = action.payload[1];
      state.playerOne.rowThree["3"] = action.payload[2];
      state.playerOne.rowThree["4"] = action.payload[3];
      state.playerOne.rowThree["5"] = action.payload[4];
      state.playerTwo.rowThree["1"] = action.payload[5];
      state.playerTwo.rowThree["2"] = action.payload[6];
      state.playerTwo.rowThree["3"] = action.payload[7];
      state.playerTwo.rowThree["4"] = action.payload[8];
      state.playerTwo.rowThree["5"] = action.payload[9];
      return;

    case REMOVE_PLAYER_CARD:
      return state;
    case ADD_PLAYER_CARD:
      return state;
    case FILL_HAND:
      return state;
    case REMOVE_HAND_CARD:
      return state;
    case CLEAR_HAND:
      return state;
      default:
        return state
  }
}, initialCardStatusState);
