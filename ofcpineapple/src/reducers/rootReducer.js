import { combineReducers } from "redux";
import deckReducer from "./deckReducer";
import cardStatusReducer from './cardStatusReducer';

export default combineReducers({
  deck: deckReducer,
  cardStatus: cardStatusReducer
});
