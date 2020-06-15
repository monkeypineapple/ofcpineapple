import { SHUFFLE_DECK, REMOVE_CARDS } from './types'

export const shuffleDeck = () => ({
  type: SHUFFLE_DECK
});

export const removeCards = (n) => ({
  type: REMOVE_CARDS,
  payload: n
})
