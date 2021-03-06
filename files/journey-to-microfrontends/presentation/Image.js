import React from "react";
import { Image } from "spectacle";

const images = {
  jpj: require("../assets/jpj.png"),
  frame: require("../assets/frame.png"),
  webcomponent: require("../assets/webcomponent.png"),
  deposit: require('../assets/deposit.gif'),
  game: require('../assets/game.png')
};

export default function({ name }) {
  return <Image src={images[name]} />;
}
