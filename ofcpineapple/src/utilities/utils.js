// export const determineColumnContent = (slot) => {
//   if (slot.isBackgroundSpace) {
//     return null;
//   } else return slot.card;
// };

const isHandCard = (id, data) => {
  let obj = data.hand.handCards;
  for (let key in obj) {
    if (obj[key] && obj[key].id === id) {
      return true;
    }
  }
  return false;
};

const findRow = (key) => {
  if (key === "rowOne") {
    return 1;
  } else if (key === "rowTwo") {
    return 2;
  } else if (key === "rowThree") {
    return 3;
  }
};

const findRowCol = (obj, id) => {
  for (let key in obj) {
    if (obj[key].id === id) {
      return parseInt(key);
    }
  }
};
const determinePlayer = (id, data, isFirstPlayer) => {
  let obj = isFirstPlayer ? data.playerOne : data.playerTwo;
  for (let key in obj) {
    if (Object.values(obj[key]).some((val) => val && val.id === id)) {
      return {
        row: findRow(key),
        col: findRowCol(obj[key], id),
      };
    }
  }
  return false;
};

const isDiscard = (id, data) => {
  return (
    !determinePlayer(id, data, true) &&
    !determinePlayer(id, data, false) &&
    !isHandCard(id, data)
  );
};

const getRowCol = (id, data, locationObj) => {
  let col;
  let row;
  let playerOne = determinePlayer(id, data, true);
  let playerTwo = determinePlayer(id, data, false);



  if (locationObj.isHand) {
    for (let key in data.hand.handCards) {
      if (data.hand.handCards[key] && data.hand.handCards[key].id === id) {
        row = 1;
        col = key;
      }
    }
    locationObj.row = row;
    locationObj.col = col;
  } else if (playerOne) {
    locationObj["row"] = playerOne.row;
    locationObj["col"] = playerOne.col;
  } else if (playerTwo) {
    locationObj["row"] = playerTwo.row;
    locationObj["col"] = playerTwo.col;
  }

};

export const getLocationInfo = (id, data) => {
  const location = {
    isHand: isHandCard(id, data),
    isPlayerOne: !!determinePlayer(id, data, true),
    isDiscard: isDiscard(id, data),
    row: 1,
    col: 1,
  };
  getRowCol(id, data, location);
  return location;
};


