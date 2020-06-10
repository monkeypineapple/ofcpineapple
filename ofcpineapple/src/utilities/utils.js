import React from "react";

export const determineColumnContent = (slot) => {
  if (slot.isBackgroundSpace) {
    return null;
  } else return slot.card;
};

//
