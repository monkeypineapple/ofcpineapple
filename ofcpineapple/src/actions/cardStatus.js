import {
  INITIAL_DEAL,
  SET_SELECTED_CARD,
  REMOVE_HAND_CARD,
  CLEAR_HAND,
  REMOVE_PLAYER_CARD,
  FILL_HAND,
  ADD_PLAYER_CARD,
  CLEAR_PLAYER_CARDS,
  GENERATE_RANDOM_BOARD,
} from "./types.js";

export const initialDeal = (deck) => ({
  type: INITIAL_DEAL,
  payload: deck,
});

export const removeHandCard = (key) => ({
  type: REMOVE_HAND_CARD,
  payload: key,
});

// export const clearHand = () => {
//   type: CLEAR_HAND

// }

export const removePlayerCard = (info) => ({
  type: REMOVE_PLAYER_CARD,
  payload: info,
});

export const addPlayerCard = (info) => ({
  type: ADD_PLAYER_CARD,
  payload: info,
});

export const fillHand = (hand) => ({
  type: FILL_HAND,
  payload: hand,
});

export const setSelectedCard = (cardInfo) => ({
  type: SET_SELECTED_CARD,
  payload: cardInfo,
});

// export const clearPlayerCards = () => ({
//   type: CLEAR_PLAYER_CARDS

// })

// export const generateRandomBoard = () => ({
//   type: GENERATE_RANDOM_BOARD

// })
