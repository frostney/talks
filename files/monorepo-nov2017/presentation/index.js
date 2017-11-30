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
  lerna: require("../assets/lerna.png"),
  yarn: require("../assets/yarn.svg"),
  title: require("../assets/title.jpg"),
  step1: require("../assets/step1.png"),
  step2: require("../assets/step2.png"),
  step3: require("../assets/step3.png"),
  modular: require("../assets/modular_things.jpg"),
  repetitivechanges: require("../assets/repetitivechanges.png"),
  prchaos: require("../assets/prchaos.png")
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
        <Slide>
          <Heading size={3} textColor="secondary">
            Imagine a project growing over time
          </Heading>
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
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40 }}>
            Multiple repositories
          </Heading>
          <CodePane source={require("raw-loader!../assets/polyrepo.example")} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40 }}>
            Monorepo
          </Heading>
          <CodePane source={require("raw-loader!../assets/monorepo.example")} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary">
            What is working well
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Single lint, build, test and release process
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Decentralized ESLint files...
          </Heading>
          <CodePane source={require("raw-loader!../assets/polyrepo.eslint.example")} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            ...become centralized
          </Heading>
          <CodePane source={require("raw-loader!../assets/monorepo.eslint.example")} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Extend from centralized if necessary
          </Heading>
          <CodePane lang="json" source={require("raw-loader!../assets/eslintrc.example")} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Easier to set up the development environment
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Easier to coordinate changes across the codebase
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.repetitivechanges} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            Removes dependencies on code reviews
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.prchaos} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            Removes the need to release common pieces of code
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Simplifies end-to-end testing
          </Heading>
        </Slide>
        <Slide bgImage={images.challenges} bgDarken={0.15}>
        <Heading size={2} textColor="secondary">
          Challenges
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={3} textColor="secondary">
          Intimidating codebase
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={3} textColor="secondary">
          Dealing with the size of monorepos
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
      <Slide>
        <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
          Git Large File Storage
        </Heading>
        <Link href="https://git-lfs.github.com" textColor="secondary" style={{ paddingBottom: 40 }}>git-lfs.github.com</Link>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={3} textColor="secondary">
          Continous integration might need to be configured
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={3} textColor="secondary">
          Synchronization with Open Source repositories
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={4} textColor="secondary">
          Git submodules
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={4} textColor="secondary">
          Compare commits
        </Heading>
        <Appear>
          <Heading size={4} textColor="secondary">
            Create patches
          </Heading>
        </Appear>
        <Appear>
          <Heading size={4} textColor="secondary">
            Apply patches on monorepo
          </Heading>
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
        <Link href="https://help.github.com/articles/about-codeowners/" textColor="secondary">help.github.com/articles/about-codeowners/</Link>
      </Slide>
      <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            Tooling
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            It's just a bunch of folders
          </Heading>
          <br />
          <Appear>
          <Heading size={3} textColor="secondary">
            We need a tool to run the same command across multiple folders
          </Heading>
          </Appear>
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
              <Link textColor="secondary" href="http://frostney.github.io/talks/monorepo-nov2017">http://frostney.github.io/talks/monorepo-nov2017</Link>
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
