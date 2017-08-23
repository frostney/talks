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
  List,
  ListItem,
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
require("spectacle/lib/themes/default/index.css");


const images = {
  mythbusters: require("../assets/MythBusters.jpg"),
  reddit: require("../assets/reddit.png"),
  cyclops: require("../assets/cyclops.gif"),
  ants: require("../assets/ants.gif"),
  lerna: require("../assets/lerna.png"),
  yarn: require("../assets/yarn.svg")
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
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 10 }}>
            The Curious Case Of Monorepos
          </Heading>
          <Image src={images.cyclops} />
          <Heading size={6} textColor="secondary" lineHeight={3}>August React Meetup</Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">Johannes Stein</Text>
              </Fill>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
            </Layout>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            What is a monorepo?
          </Heading>
          <Link href="https://developer.atlassian.com/blog/2015/10/monorepos-in-git/" textColor="secondary">developer.atlassian.com/blog/2015/10/monorepos-in-git/</Link>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">
            The repository contains more than one logical project
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">
          These projects are most likely unrelated, loosely connected or can be connected by other means
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 20 }}>
            Let's imagine a project over time
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Juggling a multimodule project over multiple repos is like trying to teach a newborn baby how to ride a bike.</Quote>
            <Cite>Babel (https://github.com/babel/babel/blob/7.0/doc/design/monorepo.md)</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            Advantages
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Single lint, build, test and release process
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <List>
            <Appear>
              <ListItem>ESLint</ListItem>
            </Appear>
            <Appear>
              <ListItem>Test framework setup</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Easier to set up the development environment
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Easier to coordinate changes across the codebase
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <List>
            <Appear>
              <ListItem>Removes dependencies on code reviews</ListItem>
            </Appear>
            <Appear>
              <ListItem>Removes the need to release common pieces of code</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Easier to test modules
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            Disadvantages
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Intimidating codebase
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Continous integration might need to be configured
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            Tooling around monorepos
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.lerna} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Install dependencies
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Link dependencies
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.yarn} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Remember when Lerna installs its dependencies for each project?
          </Heading>
        </Slide>
        <Slide>
            <Heading size={1} textColor="secondary" caps lineHeight={1}>Thank you!</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>❤️</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>
            <Text>
              <Link textColor="secondary" href="http://frostney.github.io/talks/monorepo-london">http://frostney.github.io/talks/monorepo-london</Link>
            </Text>
            </Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
              <Fill>
                <Text textColor="secondary">#reactlondon</Text>
              </Fill>
            </Layout>
          </Slide>
      </Deck>
    );
  }
}
