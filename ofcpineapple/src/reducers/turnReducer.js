//will handle turn state

//we can invrement turn based on the buttons being pushed. If turn : 1, then we know certain things
//if not turn 1 then we know other things, otherwise I think we just need
//to know which players turn it is...

const initialTurnStatusState = {
  turn: 0,
  playerOne: false,
};

export default (state = initialTurnStatusState, action) => {
  switch (action.type) {
    case CHANGE_TURN:
      return;
    default:
      return state;
  }
};
