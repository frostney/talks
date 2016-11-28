import React, { Component, PropTypes } from "react";
import Matter from "matter-js";
import BlackFlag from "./BlackFlag";
import Hit from "./Hit";
import KeyEvent from "./KeyEvent";
import Input from "../Input";

const WIDTH = 120;
const HEIGHT = 120;

class Ship extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      directionIndex: props.directionIndex
    };
  }

  componentDidMount() {
    React.Children.forEach(this.props.children, (child) => {
      if (child.type === KeyEvent) {
        const { onDown, onUp } = child.props;

        Input.key.on("down", (keyCode) => {
          if (onDown && typeof onDown === "function") {
            const onDownResult = onDown(keyCode, this.state);

            if (onDownResult) {
              this.setState((prevState) => {
                return { ...prevState, ...onDownResult };
              });
            }
          }
        });

        Input.key.on("up", (keyCode) => {
          if (onUp && typeof onUp === "function") {
            const onUpResult = onUp(keyCode, this.state);

            if (onUpResult) {
              this.setState((prevState) => {
                return { ...prevState, ...onUpResult };
              });
            }
          }
        });
      }
    });
    Matter.Events.on(this.context.engine, "afterUpdate", this.update);
  }

  componentWillUnmount() {
    Matter.Events.off(this.context.engine, "afterUpdate", this.update);

    Input.key.off("down");
    Input.key.off("up");
  }

  update() {
    const { onUpdate } = this.props;

    if (onUpdate && typeof onUpdate === "function") {
      const onUpdateResult = onUpdate(this.state);

      if (onUpdateResult) {
        this.setState((prevState) => {
          return { ...prevState, ...onUpdateResult };
        });
      }
    }
  }

  render() {
    const { children } = this.props;

    const styles = {
      position: "absolute",
      left: this.state.x,
      top: this.state.y,
      backgroundImage: `url(${require("assets/ship_rotate.png")})`,
      backgroundSize: "cover",
      backgroundPosition: `0px ${this.state.directionIndex * (-HEIGHT)}px`,
      width: WIDTH,
      height: HEIGHT
    };

    React.Children.forEach(children, (child) => {
      if (child.type === BlackFlag) {
        styles.backgroundImage = `url(${require("assets/ship_pirate.png")})`;
      }

      if (child.type === Hit) {
        const filter = "brightness(2.5) hue-rotate(-60deg)";

        styles.filter = filter;
        styles.WebkitFilter = filter;
      }
    });

    return (
      <div style={styles}>{children}</div>
    );
  }
}

Ship.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  directionIndex: PropTypes.number,
  children: PropTypes.node,
  onUpdate: PropTypes.func
};

Ship.contextTypes = {
  engine: PropTypes.object
};

Ship.defaultProps = {
  x: 0,
  y: 0,
  directionIndex: 7
};

export default Ship;
