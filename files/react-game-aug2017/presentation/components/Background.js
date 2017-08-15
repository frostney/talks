import React from "react";

const World = () => (
  <div style={{
    position: "absolute",
    backgroundImage: `url(${require("assets/water.png")})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%" }}
  />
);

export default World;
