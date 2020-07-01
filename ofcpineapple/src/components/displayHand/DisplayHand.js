import React from "react";

const DisplayHand = ({ handName }) => {
  return (
    <h3 style={{ color: "yellow", fontStyle: "bold" }}>
      {handName ? handName : "NOTHING"}
    </h3>
  );
};

export default DisplayHand;
