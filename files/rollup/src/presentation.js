// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Slide,
  Appear,
  CodePane,
  Code,
  Link,
  Layout,
  Fill,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  rollup: require("./assets/rollup.svg"),
  module1: require("./assets/module1.png"),
  module1_compiled: require("./assets/module1_compiled.png"),
  rollup_config: require("./assets/rollup_config.png"),
  twitter: require("./assets/twitter.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4f4f4f",
  secondary: "#fff",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} progress="number" transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 80 }}>Let's talk about Rollup</Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">Johannes Stein</Text>
                <Text textColor="secondary" style={{ fontSize: "1.75rem" }}>Senior Front-End Developer at Gamesys</Text>
              </Fill>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
            </Layout>
        </Slide>
        <Slide>
          <Image src={images.rollup} style={{ width: 400, height: 400 }} />
          <Appear>
            <Heading size={3} textColor="secondary">Next-generation ES6 module bundler</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary">ES6/ES2015 modules</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.module1} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.module1_compiled} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Getting started</Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ lineHeight: 0.75 }}>
            <Code textColor="secondary">npm install -g rollup</Code>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ lineHeight: 0.75 }}>
            <Code textColor="secondary">rollup mymodule.js -o dist.js -f cjs</Code>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40 }}>Using configuration</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.rollup_config} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Tree shaking</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Scope hoisting</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>REPL</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Plugins</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Use webpack for apps, and Rollup for libraries</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.twitter} />
        </Slide>
        <Slide>
            <Heading size={1} textColor="secondary" caps lineHeight={1}>Thank you!</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>❤️</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>
            <Text>
              <Link textColor="secondary" href="http://frostney.github.io/talks/rollup">http://frostney.github.io/talks/rollup</Link>
            </Text>
            </Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
            </Layout>
          </Slide>
      </Deck>
    );
  }
}
