// Import React
import React from "react";

// Import Spectacle Core tags
import {
//  Appear,
//  BlockQuote,
//  Cite,
//  CodePane,
  // Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
//  ListItem,
//  List,
//  Markdown,
//  Quote,
  Slide,
  Spectacle,
  Text
//  Table,
//  TableRow,
//  TableItem
} from "spectacle";

// import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./theme";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  image014: require("../assets/image014.gif"),
  image015: require("../assets/image015.jpg"),
  hastobe: require("../assets/hastobe.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#4f4f4f",
  secondary: "#fff"
});

export default () => (
  <Spectacle theme={theme}>
    <Deck transition={["slide"]} progress="bar" transitionDuration={400}>
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={5} textColor="white">
          Scaffolding React Native libraries
        </Heading>
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
        <Heading size={2} caps lineHeight={1}>
          Let's assume JavaScript isn't enough
        </Heading>
      </Slide>
      <Slide>
        <Text>
          http://moduscreate.com/react_native_custom_components_ios/
        </Text>
      </Slide>
      <Slide>
        <Image src={images.image014} />
      </Slide>
      <Slide>
        <Image src={images.image015} />
      </Slide>
      <Slide>
        <Image src={images.hastobe} />
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          There has to be a better way!
        </Heading>
      </Slide>
      <Slide>
        <Text>
          react-native new-library
        </Text>
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          But what about Android? 😭
        </Heading>
      </Slide>
      <Slide>
        <Text>
          https://github.com/frostney/react-native-create-library
        </Text>
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Demo Time
        </Heading>
      </Slide>
      <Slide>
        <Heading size={1} caps lineHeight={3}>Thank you!</Heading>
        <Text>https://frostney.github.io/talks/react-native-libs</Text>
        <Layout>
          <Fill>
            <Text />
          </Fill>
          <Fill>
            <Text>@frostney_</Text>
          </Fill>
        </Layout>
      </Slide>
    </Deck>
  </Spectacle>
);
