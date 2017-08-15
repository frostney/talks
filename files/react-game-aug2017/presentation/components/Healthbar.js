import React from "react";

const Healthbar = ({ value = 100, width = 160, height = 5 }) => {
  return (
    <div style={{ width, height, marginTop: -6, position: "absolute", backgroundColor: "red", borderRadius: 4 }}>
      <div style={{ width: ((value / 100) * width), height, position: "absolute", backgroundColor: "lime" }} />
    </div>
  );
};

export default Healthbar;
