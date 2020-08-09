//well need something like 
  // changePlayerTurn () =>
  // turnOneOver () => 

  //idk we need actions to tell the store to make turn 1 : false
  //and to control whether playerOne is true or false


  import { CHANGE_TURN } from "./types.js"


  export const changeTurn = (turn) => ({
    type: CHANGE_TURN,
    payload: turn
  })