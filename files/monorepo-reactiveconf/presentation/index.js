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
require("spectacle/lib/themes/default/index.css");

const images = {
  lerna: require("../assets/lerna.png"),
  yarn: require("../assets/yarn.svg"),
  title: require("../assets/title.jpg"),
  step1: require("../assets/step1.png"),
  step2: require("../assets/step2.png"),
  step3: require("../assets/step3.png"),
  modular: require("../assets/modular_things.jpg")
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
          <Image src={images.title} />
          <Heading size={6} textColor="secondary" lineHeight={3}>ReactiveConf 2017</Heading>
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
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>We 💖 modularity, don't we?</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.modular} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step1} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step2} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step3} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>What is a monorepo?</Heading>
          <Link href="https://developer.atlassian.com/blog/2015/10/monorepos-in-git/" textColor="secondary">developer.atlassian.com/blog/2015/10/monorepos-in-git/</Link>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            The repository contains more than one logical project
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            These projects are most likely unrelated, loosely connected or can be connected by other means
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary">
            A few quick tips when dealing with monorepos
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Check out single branch
          </Heading>
          <Appear>
            <Code textColor="secondary">git clone myrepo --single-branch</Code>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Shallow clone
          </Heading>
          <Appear>
            <Code textColor="secondary">git clone myrepo --depth=1</Code>
          </Appear>
          <br/><br/>
          <Appear>
            <Code textColor="secondary">git clone myrepo --shallow-since=2017-01-01</Code>
          </Appear>
          <Appear>
          <Heading size={4} textColor="secondary">(Uses <Code textColor="secondary">--single-branch</Code> by default)</Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Ownership
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}><Code textColor="secondary">CODEOWNERS</Code></Heading>
          <CodePane source={require("raw-loader!../assets/codeowners.example")} style={{ marginBottom: 40 }} />
          <Link href="https://help.github.com/articles/about-codeowners/" textColor="secondary">help.github.com/articles/about-codeowners</Link>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.lerna} />
          <br />
          <Link href="https://lernajs.io/" textColor="secondary">https://lernajs.io</Link>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.yarn} />
          <br />
          <Link href="https://yarnpkg.com" textColor="secondary">https://yarnpkg.com</Link>
        </Slide>
        <Slide>
            <Heading size={1} textColor="secondary" caps lineHeight={1}>Thank you!</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>❤️</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>
            <Text>
              <Link textColor="secondary" href="http://frostney.github.io/talks/monorepo-reactiveconf">http://frostney.github.io/talks/monorepo-reactiveconf</Link>
            </Text>
            </Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
              <Fill>
                <Text textColor="secondary">#reactiveconf</Text>
              </Fill>
            </Layout>
          </Slide>
      </Deck>
    );
  }
}
