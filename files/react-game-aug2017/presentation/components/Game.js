import React from "react";
import { Loop, Stage, World } from "react-game-kit";

const Game = ({ children }) => (
  <Loop>
    <Stage width={499} height={600}>
      <World>
        {children}
      </World>
    </Stage>
  </Loop>
);

export default Game;
