import { INITIAL_DEAL, REMOVE_HAND_CARD, CLEAR_HAND, REMOVE_PLAYER_CARD, FILL_HAND, ADD_PLAYER_CARD, CLEAR_PLAYER_CARDS, GENERATE_RANDOM_BOARD } from './types.js';

export const intitalDeal = (deck) => ({
  type: INITIAL_DEAL,
  payload: deck.slice(0,10)
})

export const removeHandCard = (key) => ({
  type: REMOVE_HAND_CARD,
  payload: key

})

// export const clearHand = () => {
//   type: CLEAR_HAND

// }

export const removePlayerCard = (info) => ({
  type: REMOVE_PLAYER_CARD,
  payload: info
})

export const addPlayerCard = (info) => ({
  type: ADD_PLAYER_CARD, 
  payload: info
})

export const fillHand = (deck) => ({
  type: FILL_HAND,
  payload: deck.slice(0,3)

})



// export const clearPlayerCards = () => ({
//   type: CLEAR_PLAYER_CARDS

// })

// export const generateRandomBoard = () => ({
//   type: GENERATE_RANDOM_BOARD

// })


