import {
  INITIAL_DEAL,
  REMOVE_HAND_CARD,
  CLEAR_HAND,
  REMOVE_PLAYER_CARD,
  FILL_HAND,
  ADD_PLAYER_CARD,
} from "../actions/types";

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

export default function cardStatusReducer(
  state = initialCardStatusState,
  action
) {
  switch (action.type) {
    case INITIAL_DEAL:
      return state;
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
  }
  return state;
}
