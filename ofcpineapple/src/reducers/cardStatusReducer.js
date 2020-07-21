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
  selectedSlot: {
    location: null,
  },
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
      // change location of selectedCard slot to 'null'

      console.log(action.payload.info, "remove player plyload");

      const rowSlotInfo = action.payload.info.row;
      const colSlotInfo = action.payload.info.col;

      if (action.payload.info.isHand) {
        if (action.payload.info.col === 1) {
          if (state.hand.handCards["1"] !== null) {
            state.hand.handCards["1"] = null;
          }
        } else if (action.payload.info.col === 2) {
          if (state.hand.handCards["2"] !== null) {
            state.hand.handCards["2"] = null;
          }
        } else if (action.payload.info.col === 3) {
          if (state.hand.handCards["3"] !== null) {
            state.hand.handCards["3"] = null;
          }
        }
      } else if (action.payload.info.isPlayerOne) {
        if (rowSlotInfo === 1) {
          if (colSlotInfo === 1) {
            if (state.playerOne.rowOne["1"] !== null) {
              state.playerOne.rowOne["1"] = null;
            }
          } else if (colSlotInfo === 2) {
            if (state.playerOne.rowOne["2"] !== null) {
              state.playerOne.rowOne["2"] = null;
            }
          } else if (colSlotInfo === 3) {
            if (state.playerOne.rowOne["3"] !== null) {
              state.playerOne.rowOne["3"] = null;
            }
          }
        } else if (rowSlotInfo === 2) {
          if (colSlotInfo === 1) {
            if (state.playerOne.rowTwo["1"] !== null) {
              state.playerOne.rowTwo["1"] = null;
            }
          } else if (colSlotInfo === 2) {
            if (state.playerOne.rowTwo["2"] !== null) {
              state.playerOne.rowTwo["2"] = null;
            }
          } else if (colSlotInfo === 3) {
            if (state.playerOne.rowTwo["3"] !== null) {
              state.playerOne.rowTwo["3"] = null;
            }
          } else if (colSlotInfo === 4) {
            if (state.playerOne.rowTwo["4"] !== null) {
              state.playerOne.rowTwo["4"] = null;
            }
          } else if (colSlotInfo === 5) {
            if (state.playerOne.rowTwo["5"] !== null) {
              state.playerOne.rowTwo["5"] = null;
            }
          }
        } else if (rowSlotInfo === 3) {
          if (colSlotInfo === 1) {
            if (state.playerOne.rowThree["1"] !== null) {
              state.playerOne.rowThree["1"] = null;
            }
          } else if (colSlotInfo === 2) {
            if (state.playerOne.rowThree["2"] !== null) {
              state.playerOne.rowThree["2"] = null;
            }
          } else if (colSlotInfo === 3) {
            if (state.playerOne.rowThree["3"] !== null) {
              state.playerOne.rowThree["3"] = null;
            }
          } else if (colSlotInfo === 4) {
            if (state.playerOne.rowThree["4"] !== null) {
              state.playerOne.rowThree["4"] = null;
            }
          } else if (colSlotInfo === 5) {
            if (state.playerOne.rowThree["5"] !== null) {
              state.playerOne.rowThree["5"] = null;
            }
          }
        }
      } else if (action.payload.info.isPlayerOne === false) {
        if (rowSlotInfo === 1) {
          if (colSlotInfo === 1) {
            if (state.playerTwo.rowOne["1"] !== null) {
              state.playerTwo.rowOne["1"] = null;
            }
          } else if (colSlotInfo === 2) {
            if (state.playerTwo.rowOne["2"] !== null) {
              state.playerTwo.rowOne["2"] = null;
            }
          } else if (colSlotInfo === 3) {
            if (state.playerTwo.rowOne["3"] !== null) {
              state.playerTwo.rowOne["3"] = null;
            }
          }
        } else if (rowSlotInfo === 2) {
          if (colSlotInfo === 1) {
            if (state.playerTwo.rowTwo["1"] !== null) {
              state.playerTwo.rowTwo["1"] = null;
            }
          } else if (colSlotInfo === 2) {
            if (state.playerTwo.rowTwo["2"] !== null) {
              state.playerTwo.rowTwo["2"] = null;
            }
          } else if (colSlotInfo === 3) {
            if (state.playerTwo.rowTwo["3"] !== null) {
              state.playerTwo.rowTwo["3"] = null;
            }
          } else if (colSlotInfo === 4) {
            if (state.playerTwo.rowTwo["4"] !== null) {
              state.playerTwo.rowTwo["4"] = null;
            }
          } else if (colSlotInfo === 5) {
            if (state.playerTwo.rowTwo["5"] !== null) {
              state.playerTwo.rowTwo["5"] = null;
            }
          }
        } else if (rowSlotInfo === 3) {
          if (colSlotInfo === 1) {
            if (state.playerTwo.rowThree["1"] !== null) {
              state.playerTwo.rowThree["1"] = null;
            }
          } else if (colSlotInfo === 2) {
            if (state.playerTwo.rowThree["2"] !== null) {
              state.playerTwo.rowThree["2"] = null;
            }
          } else if (colSlotInfo === 3) {
            if (state.playerTwo.rowThree["3"] !== null) {
              state.playerTwo.rowThree["3"] = null;
            }
          } else if (colSlotInfo === 4) {
            if (state.playerTwo.rowThree["4"] !== null) {
              state.playerTwo.rowThree["4"] = null;
            }
          } else if (colSlotInfo === 5) {
            if (state.playerTwo.rowThree["5"] !== null) {
              state.playerTwo.rowThree["5"] = null;
            }
          }
        }
      }

      return state;
    case SET_SELECTED_SLOT:
      console.log(action.payload.info, "selected slot payload");

      state.selectedSlot.location = action.payload.info;

      return;
    case ADD_PLAYER_CARD:
      // {location: {…}}
      // location:
      // col: 1
      // isDiscard: false
      // isHand: false
      // isPlayerOne: true
      // row: 1

      const rowInfo = action.payload.location.row;
      const colInfo = action.payload.location.col;

      if (action.payload.location.isPlayerOne) {
        if (rowInfo === 1) {
          if (colInfo === 1) {
            if (state.playerOne.rowOne["1"] === null) {
              state.playerOne.rowOne["1"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 2) {
            if (state.playerOne.rowOne["2"] === null) {
              state.playerOne.rowOne["2"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 3) {
            if (state.playerOne.rowOne["3"] === null) {
              state.playerOne.rowOne["3"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          }
        } else if (rowInfo === 2) {
          if (colInfo === 1) {
            if (state.playerOne.rowTwo["1"] === null) {
              state.playerOne.rowTwo["1"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 2) {
            if (state.playerOne.rowTwo["2"] === null) {
              state.playerOne.rowTwo["2"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 3) {
            if (state.playerOne.rowTwo["3"] === null) {
              state.playerOne.rowTwo["3"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 4) {
            if (state.playerOne.rowTwo["4"] === null) {
              state.playerOne.rowTwo["4"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 5) {
            if (state.playerOne.rowTwo["5"] === null) {
              state.playerOne.rowTwo["5"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          }
        } else if (rowInfo === 3) {
          if (colInfo === 1) {
            if (state.playerOne.rowThree["1"] === null) {
              state.playerOne.rowThree["1"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 2) {
            if (state.playerOne.rowThree["2"] === null) {
              state.playerOne.rowThree["2"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 3) {
            if (state.playerOne.rowThree["3"] === null) {
              state.playerOne.rowThree["3"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 4) {
            if (state.playerOne.rowThree["4"] === null) {
              state.playerOne.rowThree["4"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 5) {
            if (state.playerOne.rowThree["5"] === null) {
              state.playerOne.rowThree["5"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          }
        }
      } else if (action.payload.location.isPlayerOne === false) {
        if (rowInfo === 1) {
          if (colInfo === 1) {
            if (state.playerTwo.rowOne["1"] === null) {
              state.playerTwo.rowOne["1"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 2) {
            if (state.playerTwo.rowOne["2"] === null) {
              state.playerTwo.rowOne["2"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 3) {
            if (state.playerTwo.rowOne["3"] === null) {
              state.playerTwo.rowOne["3"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          }
        } else if (rowInfo === 2) {
          if (colInfo === 1) {
            if (state.playerTwo.rowTwo["1"] === null) {
              state.playerTwo.rowTwo["1"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 2) {
            if (state.playerTwo.rowTwo["2"] === null) {
              state.playerTwo.rowTwo["2"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 3) {
            if (state.playerTwo.rowTwo["3"] === null) {
              state.playerTwo.rowTwo["3"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 4) {
            if (state.playerTwo.rowTwo["4"] === null) {
              state.playerTwo.rowTwo["4"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 5) {
            if (state.playerTwo.rowTwo["5"] === null) {
              state.playerTwo.rowTwo["5"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          }
        } else if (rowInfo === 3) {
          if (colInfo === 1) {
            if (state.playerTwo.rowThree["1"] === null) {
              state.playerTwo.rowThree["1"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 2) {
            if (state.playerTwo.rowThree["2"] === null) {
              state.playerTwo.rowThree["2"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 3) {
            if (state.playerTwo.rowThree["3"] === null) {
              state.playerTwo.rowThree["3"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 4) {
            if (state.playerTwo.rowThree["4"] === null) {
              state.playerTwo.rowThree["4"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          } else if (colInfo === 5) {
            if (state.playerTwo.rowThree["5"] === null) {
              state.playerTwo.rowThree["5"] = state.selectedCard.card;
              state.selectedCard.card = null;
            }
          }
        }
      }

      // console.log(action.payload);
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
