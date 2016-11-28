import React from "react";

const Cannonball = ({ x, y }) => {
  return (
    <div style={{
      position: "absolute",
      left: x,
      top: y,
      backgroundImage: `url(${require("assets/cannonball.png")})`,
      backgroundSize: "cover",
      width: 30,
      height: 30 }}
    />
  );
};

export default Cannonball;
