// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
//  BlockQuote,
//  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
//  ListItem,
//  List,
//  Markdown,
//  Quote,
  Slide,
//  S,
  Spectacle,
  Text
//  Table,
//  TableRow,
//  TableItem
} from "spectacle";

import Playground from "component-playground";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./theme";

import * as components from "./components";
import Key from "./Key";

// Import custom component
// import Interactive from "assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  kenConvince: require("assets/ken_convince.png"),
  water: require("assets/water.png"),
  ship: require("assets/ship.png"),
  shipRotate: require("assets/ship_rotate.png"),
  pirateship: require("assets/ship_pirate.png"),
  shipPirateAnimation: require("assets/ship_pirate_small_cannon.png"),
  cannonball: require("assets/cannonball.png")
};

const imports = { React, Key, ...components };

preloader(images);

const theme = createTheme({
  primary: "#4f4f4f",
  secondary: "#fff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress="number" transitionDuration={400} controls={false}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={5} textColor="white">
              Let's create a React powered game in 25 minutes
            </Heading>
            <Image src={images.pirateship} />
            <Heading size={6} textColor="white" lineHeight={3}>Reactivate London #5</Heading>
            <Layout>
              <Fill>
                <Text>Johannes Stein</Text>
              </Fill>
              <Fill>
                <Text>@frostney_</Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              Let's get started
            </Heading>
          </Slide>
          <Slide margin={1}>
            <div className="playground-slide">
              <Playground codeText={require("raw!assets/step1.example")} scope={imports} />
            </div>
          </Slide>
          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!assets/game_magic.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              Moving our ship around
            </Heading>
          </Slide>
          <Slide margin={1}>
            <div className="playground-slide">
              <Playground codeText={require("raw!assets/step2.example")} scope={imports} />
            </div>
          </Slide>
          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!assets/key_magic.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading size={2} fit caps lineHeight={2}>
              Spritesheet
            </Heading>
            <Appear>
              <Text lineHeight={1.5}>An image that contains several smaller graphics in a tiled grid arrangement</Text>
            </Appear>
          </Slide>
          <Slide>
            <Image src={images.shipRotate} />
          </Slide>
          <Slide margin={1}>
            <div className="playground-slide">
              <Playground codeText={require("raw!assets/step3.example")} scope={imports} />
            </div>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              Putting the pirate ship on patrol
            </Heading>
          </Slide>
          <Slide margin={1}>
            <div className="playground-slide">
              <Playground codeText={require("raw!assets/step4.example")} scope={imports} />
            </div>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              Shooting cannonballs
            </Heading>
          </Slide>
          <Slide margin={1}>
            <div className="playground-slide">
              <Playground codeText={require("raw!assets/step5.example")} scope={imports} />
            </div>
          </Slide>
          <Slide margin={1}>
          <div className="playground-slide">
            <Playground codeText={require("raw!assets/step6.example")} scope={imports} />
          </div>
        </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              There is still a lot to do
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              React Game Kit
            </Heading>
            <Text>
              <Link href="https://github.com/FormidableLabs/react-game-kit">https://github.com/FormidableLabs/react-game-kit</Link>
            </Text>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>Thank you!</Heading>
            <Heading size={2} style={{ marginTop: 40, marginBottom: 40 }}>❤️</Heading>
            <Heading size={2} style={{ marginTop: 40, marginBottom: 40 }}>
            <Text>
              <Link href="http://frostney.github.io/talks/react-game-aug2017">http://frostney.github.io/talks/react-game-aug2017</Link>
            </Text>
            </Heading>
            <Layout>
              <Fill>
                <Text>@frostney_</Text>
              </Fill>
              <Fill>
                <Text>#ReactivateLDN</Text>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
