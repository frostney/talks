import React from "react";
import { AnimatedSpriteSheet } from "react-spritesheet";

const AnimatedPirateShip = ({ x = 0, y = 0, speed = 100 }) => (
  <div style={{ position: "absolute", left: x, top: y }}>
    <AnimatedSpriteSheet
      filename={require("assets/ship_pirate_small_cannon.png")}
      bounds={{ x: 0, y: 0, width: 480, height: 400 }}
      frame={{ width: 80, height: 80 }}
      speed={speed}
    />
  </div>
);

export default AnimatedPirateShip;
