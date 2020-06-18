import React from "react";

export const determineColumnContent = (slot) => {
  if (slot.isBackgroundSpace) {
    return null;
  } else return slot.card;
};

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
    if (Object.values(obj[key]).some((val) => val.id === id)) {
      return {
        row: findRow(key),
        col: findRowCol(key, id),
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

const isPlayerTwo = (id, data) => {
  let obj = data.playerTwo;

  for (let key in obj) {
    if (Object.values(obj[key]).some((val) => val.id === id)) {
      return true;
    }
  }
  return false;
};

const getRowCol = (id, data, locationObj) => {
  let col;
  let row;
  if (locationObj.isHand) {
    for (let key in data.hand.handCards) {
      if (data.hand.handCards[key] && data.hand.handCards[key].id === id) {
        row = 1;
        col = key;
      }
    }
    locationObj.row = row;
    locationObj.col = col;
  }
  if (locationObj.isPlayerOne) {
    for (let key in data.playerOne.handCards) {
      if (data.hand.handCards[key] && data.hand.handCards[key].id === id) {
        row = 1;
        col = key;
      }
    }
    locationObj.row = row;
    locationObj.col = col;
  }
};

export const getLocationInfo = (id, data) => {
  const location = {
    isHand: false,
    isPlayerOne: false,
    isDiscard: false,
    row: 1,
    col: 1,
  };

  data = {};

  // hand: {
  //   handCards: { 1: null, 2: null, 3: null },
  // },
  // playerOne: {
  //   rowOne: {
  //     1: null,
  //     2: null,
  //     3: null,
  //   },

  //   rowTwo: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //     5: null,
  //   },

  //   rowThree: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //     5: null,
  //   },
};

//
