// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  CodePane,
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
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  frankenstein: require("../assets/frankenstein-its-native.jpg"),
  lottie: require("../assets/lottie.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default () => (
  <Deck transition={["slide"]} transitionDuration={500} theme={theme} progress="bar">
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React Native
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Where is it now? (Almost two years after its inception)
      </Text>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What is it?
      </Heading>
      <List>
        <Appear>
          <ListItem>React & web principles applied onto the native platform</ListItem>
        </Appear>
        <Appear>
          <ListItem>Platforms: iOS, Android, Windows, etc.</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide>
      <Image src={images.frankenstein} />
    </Slide>
    <Slide bgColor="primary">
      <CodePane lang="jsx" source={require("raw-loader!../assets/react_native_view.example")} />
    </Slide>
    <Slide bgColor="primary">
      <CodePane lang="jsx" source={require("raw-loader!../assets/react_native_api.example")} />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Who's using it?
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What's amazing?
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        ES2015+ support out of the box
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Flexbox
      </Heading>
    </Slide>
    <Slide>
      <CodePane lang="css" source={require("raw-loader!../assets/cssreset.example")} />
      <Text size={5}>https://twitter.com/VilleImmonen/status/776404048337440770</Text>
    </Slide>
    <Slide>
      <CodePane lang="jsx" source={require("raw-loader!../assets/react_native_style.example")} />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Workflow
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <List>
        <Appear>
          <ListItem>react-native init</ListItem>
        </Appear>
        <Appear>
          <ListItem>create-react-native-app</ListItem>
        </Appear>
        <Appear>
          <ListItem>Integration with native code</ListItem>
        </Appear>
        <Appear>
          <ListItem>Asset management</ListItem>
        </Appear>
        <Appear>
          <ListItem>Hot module reloading</ListItem>
        </Appear>
        <Appear>
          <ListItem>Expo</ListItem>
        </Appear>
        <Appear>
          <ListItem>Alternative packager (with Webpack)</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Room for improvement
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Release cycle
      </Heading>
      <List>
        <Appear>
          <ListItem>New version every month</ListItem>
        </Appear>
        <Appear>
          <ListItem>Breaking changes every now and again</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Animations
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <CodePane lang="jsx" source={require("raw-loader!../assets/react_native_layout_animation.example")} />
    </Slide>
    <Slide bgColor="primary">
      <CodePane lang="jsx" source={require("raw-loader!../assets/react_native_animation.example")} />
    </Slide>
    <Slide>
      <Image src={images.lottie} />
      <Text>https://github.com/airbnb/lottie-react-native</Text>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        SVG support
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Platform parity
      </Heading>
      <List>
        <Appear>
          <ListItem>Shadows</ListItem>
        </Appear>
        <Appear>
          <ListItem>Overflow behavior</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Thank you!
      </Heading>
      <Heading size={6}>
        http://frostney.github.io/talks/react-native-may2017
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={6}>
        @frostney_
      </Text>
    </Slide>
  </Deck>
);
