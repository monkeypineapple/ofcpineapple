import {
  INITIAL_DEAL,
  REMOVE_HAND_CARD,
  CLEAR_HAND,
  REMOVE_PLAYER_CARD,
  FILL_HAND,
  ADD_PLAYER_CARD,
  SET_SELECTED_CARD,
  SET_SELECTED_SLOT,
} from "../actions/types";
import produce from "immer";

const initialCardStatusState = {
 
  selectedCard: {
    card: null,
  },
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
    // case SET_SELECTED_SLOT: 
    // // console.log(action.payload.location, "selected slot payload")
    //   state.selectedSlot.card = action.payload
    //   // console.log(state.selectedSlot.location, "location")
    //   return;
    case ADD_PLAYER_CARD:

      // {location: {…}}
      // location:
      // col: 1
      // isDiscard: false
      // isHand: false
      // isPlayerOne: true
      // row: 1

      let rowInfo = action.payload.location.row
      let colInfo = action.payload.location.col

      if(action.payload.location.isPlayerOne) {
        if(rowInfo === 1) {
          if(colInfo === 1) {
            if(state.playerOne.rowOne["1"] !== null) {
            state.playerOne.rowOne["1"] = state.selectedCard.card
          }
          } else if(colInfo === 2) {
            state.playerOne.rowOne["2"] = state.selectedCard.card
          } else if(colInfo === 3) {
            state.playerOne.rowOne["3"] = state.selectedCard.card
          }
        } else if(rowInfo === 2 ) {
          if(colInfo === 1) {
            state.playerOne.rowTwo["1"] = state.selectedCard.card
          } else if(colInfo === 2) {
            state.playerOne.rowTwo["2"] = state.selectedCard.card
          } else if(colInfo === 3) {
            state.playerOne.rowTwo["3"] = state.selectedCard.card
          } else if(colInfo === 4) {
            state.playerOne.rowTwo["4"] = state.selectedCard.card
          } else if(colInfo === 5) {
            state.playerOne.rowTwo["5"] = state.selectedCard.card
          }
        } else if(rowInfo === 3) {
          if(colInfo === 1) {
            if(state.playerOne.rowThree["1"] === null) {
            state.playerOne.rowThree["1"] = state.selectedCard.card
            }
          } else if(colInfo === 2) {
            state.playerOne.rowThree["2"] = state.selectedCard.card
          } else if(colInfo === 3) {
            state.playerOne.rowThree["3"] = state.selectedCard.card
          } else if(colInfo === 4) {
            state.playerOne.rowThree["4"] = state.selectedCard.card
          } else if(colInfo === 5) {
            state.playerOne.rowThree["5"] = state.selectedCard.card
          }
        }
      } else {
        if(rowInfo === 1) {
          if(colInfo === 1) {
            state.playerTwo.rowOne["1"] = state.selectedCard.card
          } else if(colInfo === 2) {
            state.playerTwo.rowOne["2"] = state.selectedCard.card
          } else if(colInfo === 3) {
            state.playerTwo.rowOne["3"] = state.selectedCard.card
          }
        } else if(rowInfo === 2 ) {
          if(colInfo === 1) {
            state.playerTwo.rowTwo["1"] = state.selectedCard.card
          } else if(colInfo === 2) {
            state.playerTwo.rowTwo["2"] = state.selectedCard.card
          } else if(colInfo === 3) {
            state.playerTwo.rowTwo["3"] = state.selectedCard.card
          } else if(colInfo === 4) {
            state.playerTwo.rowTwo["4"] = state.selectedCard.card
          } else if(colInfo === 5) {
            state.playerTwo.rowTwo["5"] = state.selectedCard.card
          }
        } else if(rowInfo === 3) {
          if(colInfo === 1) {
            state.playerTwo.rowThree["1"] = state.selectedCard.card
          } else if(colInfo === 2) {
            state.playerTwo.rowThree["2"] = state.selectedCard.card
          } else if(colInfo === 3) {
            state.playerTwo.rowThree["3"] = state.selectedCard.card
          } else if(colInfo === 4) {
            state.playerTwo.rowThree["4"] = state.selectedCard.card
          } else if(colInfo === 5) {
            state.playerTwo.rowThree["5"] = state.selectedCard.card
          }
        }
      }
     
     
      console.log(action.payload)
      return;
    case FILL_HAND: // [{}, {}]
      state.hand.handCards["1"] = action.payload[0];

      state.hand.handCards["2"] = action.payload[1];

      state.hand.handCards["3"] = action.payload[2];

      return;
    case REMOVE_HAND_CARD:
      return state;
    case CLEAR_HAND:
      return state;
    case SET_SELECTED_CARD:
      if (
        state.selectedCard.card &&
        action.payload.card.id === state.selectedCard.card.id
      ) {
        state.selectedCard.card = null;
      } else {
        state.selectedCard.card = action.payload.card;
      }

      return;
    default:
      return state;
  }
}, initialCardStatusState);
