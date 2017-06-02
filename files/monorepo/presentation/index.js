// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Quote,
  Slide,
  Appear,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  mythbusters: require("../assets/MythBusters.jpg"),
  reddit: require("../assets/reddit.png"),
  cyclops: require("../assets/cyclops.gif"),
  ants: require("../assets/ants.gif"),
  lerna: require("../assets/lerna.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4f4f4f",
  secondary: "#fff",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} progress="number" transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" style={{ paddingBottom: 20 }}>
            The Curious Case Of Monorepos
          </Heading>
          <Appear>
            <Image src={images.cyclops} />
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.reddit} style={{ marginLeft: "-10rem" }}/>
          <Text textColor="#fff" fit style={{ marginLeft: "-10rem" }}>https://www.reddit.com/r/programming/comments/5a4yzy/why_you_should_use_a_single_repository_for_all/d9esxpk/</Text>
        </Slide>
        <Slide bgImage={images.mythbusters} />
        <Slide bgImage={images.mythbusters} bgDarken={0.7}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Myth #1
          </Heading>
          <Heading size={2} lineHeight={1} textColor="secondary" style={{ marginBottom: 40 }}>
            It's slooooooow!
          </Heading>
          <Appear>
            <Heading size={3} lineHeight={1} textColor="secondary">
              Well, that's kinda true.
            </Heading>
          </Appear>
          <Appear>
            <Heading size={3} lineHeight={1} textColor="secondary">
              Depends though. Your mileage may vary.
            </Heading>
          </Appear>
        </Slide>
        <Slide bgImage={images.mythbusters} bgDarken={0.7}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Myth #2
          </Heading>
          <Heading size={2} lineHeight={1} textColor="secondary" style={{ marginBottom: 40 }}>
            History noise
          </Heading>
          <Appear>
            <Heading size={3} lineHeight={1} textColor="secondary">
              Conventions & workflows need to be in place
          </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Juggling a multimodule project over multiple repos is like trying to teach a newborn baby how to ride a bike.</Quote>
            <Cite>Babel</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.ants} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Advantages of monorepos
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Single lint, build, test and release process
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Easier to set up the development environment
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Easier to coordinate changes across the codebase
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Easier to test modules
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Disadvantages of monorepos
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Intimidating codebase
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Tooling around monorepos
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.lerna} />
        </Slide>
      </Deck>
    );
  }
}
