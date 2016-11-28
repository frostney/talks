import EventMap from "eventmap";
import Key from "./Key";

const Input = {};

// TODO: Find a different name
Input.key = new EventMap();

let pressedKeys = [];

window.addEventListener("keydown", (evt) => {
  if (pressedKeys.indexOf(evt.keyCode) === -1) {
    pressedKeys.push(evt.keyCode);
  }

  Input.key.trigger({
    name: "down",
    context: Key
  }, pressedKeys);
}, true);

window.addEventListener("keyup", (evt) => {
  const keyCodeIndex = pressedKeys.indexOf(evt.keyCode);

  if (keyCodeIndex >= 0) {
    if (pressedKeys.length === 1) {
      pressedKeys = [];
    } else {
      pressedKeys = pressedKeys.splice(keyCodeIndex, 1);
    }
  }

  Input.key.trigger({
    name: "up",
    context: Key
  }, pressedKeys);
}, true);

export default Input;
