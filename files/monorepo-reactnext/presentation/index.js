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
  CodePane,
  Code,
  Link,
  Layout,
  Fill,
  Text
} from "spectacle";

import Typist from "react-typist";
import "react-typist/dist/Typist.css";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Terminal from "spectacle-terminal";

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
  step4: require("../assets/step4.png"),
  step5: require("../assets/step5.png"),
  step6: require("../assets/step6.png"),
  benefits: require("../assets/benefits.jpg"),
  challenges: require("../assets/challenges.jpg"),
  madscience: require("../assets/madscience.png"),
  repetitivechanges: require("../assets/repetitivechanges.png"),
  prchaos: require("../assets/prchaos.png"),
  camel1: require("../assets/camel1.jpg"),
  camel2: require("../assets/camel2.jpg"),
  cameluber: require("../assets/cameluber.png")
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

const outputRemote = `Updating origin
remote: Counting objects: 942, done.
remote: Compressing objects: 100% (51/51), done.
remote: Total 942 (delta 34), reused 73 (delta 27), pack-reused 857
Receiving objects: 100% (942/942), 38.10 MiB | 464.00 KiB/s, done.
Resolving deltas: 100% (393/393), done.
From https://link/to/my/repo.git
 * [new branch]      master     -> origin/master`;

const outputPull = `From https://link/to/my/repo.git
* branch            master     -> FETCH_HEAD
Checking out files: 100% (582/582), done.`;

const outputLernaInit = `lerna info version 2.1.2
lerna info Initializing Git repository
lerna info Updating package.json
lerna info Creating lerna.json
lerna success Initialized Lerna files`;

const cursor = {
  show: true,
  blink: true,
  element: " █",
  hideWhenDone: true,
  hideWhenDoneDelay: 500
};

const createCommand = (command, prefix = "~") => (
  <div>
    <div style={{ display: "inline-block" }}>{prefix}> </div>
    <div style={{ display: "inline-block" }}>
      <Typist cursor={ cursor }>{command}</Typist>
    </div>
  </div>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} progress="number" transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Image src={images.title} />
          <Heading size={6} textColor="secondary" lineHeight={3}>ReactNext 2017</Heading>
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
          <Heading size={2} textColor="secondary">🖐</Heading>
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
        <Slide bgImage={images.madscience} bgDarken={0.5}>
          <BlockQuote>
            <Quote textColor="secondary">Multiple repositories? Where we're going, we don't need... multiple repositories.</Quote>
            <Cite>Doc Brown (Back To The Future)</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.camel1} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.camel2} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            "It's Uber, but..."
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            Let's create Uber, but with camels
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">Not for realsies, just as an architecture example for the purposes of this talk</Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.cameluber} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            Imagine this project growing over time
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
          <Slide bgColor="primary">
          <Image src={images.step4} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step5} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step6} />
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
          <Heading size={3} textColor="secondary">It's just a bunch of folders</Heading>
        </Slide>
        <Slide bgImage={images.benefits} bgDarken={0.45}>
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
        <Slide bgImage={images.challenges} bgDarken={0.45}>
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
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>Check out specific folders (sparse checkout)</Heading>
          <Terminal output={[
            createCommand("mkdir submonorepo"),
            createCommand("cd ./submonorepo"),
            createCommand("git init", "~/submonorepo"),
            "Initialized empty Git repository in ~/submonorepo/.git/",
            createCommand("git remote add origin -f https://link/to/my/repo.git", "~/submonorepo"),
            outputRemote,
            createCommand("git config core.sparsecheckout true", "~/submonorepo"),
            createCommand("git pull origin master", "~/submonorepo"),
            outputPull
          ]}
          />
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
        <Slide>
          <CodePane lang="jsx" source={require("raw-loader!../assets/ci.example")} />
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
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Juggling a multimodule project over multiple repos is like trying to teach a newborn baby how to ride a bike.</Quote>
            <Cite>Babel (github.com/babel/babel/blob/7.0/doc/design/monorepo.md)</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40, lineHeight: 0.5 }}>
            <Code textColor="secondary">yarn add global lerna</Code>
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary" style={{ lineHeight: 0.75 }}>
              (<Code textColor="secondary">npm install -g lerna</Code>)
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40 }}>Let's create a monorepo</Heading>
          <Terminal title="" output={[
            createCommand("lerna init"),
            outputLernaInit
          ]}
          />
        </Slide>
        <Slide>
          <Heading size={3} style={{ paddingBottom: 40 }}><Code textColor="secondary">lerna.json</Code></Heading>
          <CodePane lang="json" source={require("raw-loader!../assets/lerna.json.example")} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">Bootstrap</Heading>
          <Terminal title="" output={[
            createCommand("lerna bootstrap"),
            `├── lerna.json
    ├── package.json
    └── packages
        ├── chat-client
        │   ├── node_modules
        │   │   └── ui-components -> ../../ui-components
        │   └── package.json
        ├── chat-server
        │   └── package.json
        ├── newsfeed
        │   ├── node_modules
        │   │   └── ui-components -> ../../ui-components
        │   └── package.json
        └── ui-components
            ├── node_modules
            │   ├── asap
            │   ├── core-js
            │   ├── create-react-class
            │   ├── encoding
            │   ├── fbjs
            │   ├── iconv-lite
            │   ├── is-stream
            │   ├── isomorphic-fetch
            │   ├── js-tokens
            │   ├── loose-envify
            │   ├── node-fetch
            │   ├── object-assign
            │   ├── promise
            │   ├── prop-types
            │   ├── react
            │   ├── setimmediate
            │   ├── ua-parser-js
            │   └── whatwg-fetch
            └── package.json

28 directories, 8 files`
          ]}
          />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Target specific packages with <Code textColor="secondary">--ignore</Code> or <Code textColor="secondary">--scope</Code>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40 }}>Running scripts</Heading>
          <Appear>
            <Code textColor="secondary">lerna run test</Code>
          </Appear>
          <br/><br/>
          <Appear>
            <Code textColor="secondary">lerna exec -- rm -rf node_modules</Code>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">Releases</Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">Fixed mode</Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">Independant release</Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40 }}>Import repositories</Heading>
          <Appear>
            <Code textColor="secondary">lerna import</Code>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.yarn} />
        </Slide>
        <Slide>
            <Heading size={1} textColor="secondary" caps lineHeight={1}>Thank you!</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>❤️</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>
            <Text>
              <Link textColor="secondary" href="http://frostney.github.io/talks/monorepo-reactnext">http://frostney.github.io/talks/monorepo-reactnext</Link>
            </Text>
            </Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
              <Fill>
                <Text textColor="secondary">#reactnext</Text>
              </Fill>
            </Layout>
          </Slide>
      </Deck>
    );
  }
}
