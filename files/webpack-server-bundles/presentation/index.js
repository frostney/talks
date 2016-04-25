// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
//  BlockQuote,
//  Cite,
  CodePane,
  Code,
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
  S,
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
  theroadsofar: require("../assets/theroadsofar.jpg"),
  now: require("../assets/now.jpg"),
  samfalling: require("../assets/samfalling.gif")
};

const code = {
  requires: require("raw!../assets/requires.example"),
  resolve: require("raw!../assets/resolve.example"),
  resolveServer: require("raw!../assets/resolve_server.example"),
  assets: require("raw!../assets/assets.example"),
  assetsServer: require("raw!../assets/assets_server.example"),
  es2015: require("raw!../assets/es2015.example"),
  es2015Server: require("raw!../assets/es2015_server.example"),
  webpackServer: require("raw!../assets/webpack_server.example"),
  debugging: require("raw!../assets/debugging.example"),
  nodemodules: require("raw!../assets/nodemodules.example"),
  hmr: require("raw!../assets/hmr.example")
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
          Webpack for server bundles
        </Heading>
        <Heading size={6} textColor="white" lineHeight={3}>React Berlin (Meetup #8)</Heading>
        <Layout>
          <Fill>
            <Text>Johannes Stein</Text>
          </Fill>
          <Fill>
            <Text>@frostney_</Text>
          </Fill>
        </Layout>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={2}>
          A wild <Link href="https://twitter.com/frostney_">@frostney</Link> appears
        </Heading>
        <Appear>
          <Text lineHeight={1.5}>
            Also known as <S type="bold">Johannes Stein</S> in the real world
          </Text>
        </Appear>
        <Appear>
          <Text lineHeight={1.5}>Worked for a number of startups probably no one ever heard of</Text>
        </Appear>
        <Appear>
          <Text lineHeight={1.5}>Embraced React since around January 2015</Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Isomorphic/Universal JavaScript
        </Heading>
        <Image src={images.isomorphic} />
      </Slide>
      <Slide>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>Code re-use</Heading>
        </Appear>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>Render React components on the server</Heading>
        </Appear>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>More performance ... potentially!</Heading>
        </Appear>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>SEO and stuff</Heading>
        </Appear>
      </Slide>
      <Slide bgImage={images.theroadsofar} />
      <Slide>
        <Heading size={1} caps lineHeight={1}>
          The client
        </Heading>
      </Slide>
      <Slide>
        <Appear>
          <Heading size={2} caps lineHeight={1}>
            Webpack handles our assets...
          </Heading>
        </Appear>
        <Appear>
          <Heading size={2} caps lineHeight={1}>
            ...and bundles them to our needs
          </Heading>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={1} caps lineHeight={1}>
          The server
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Node.js with Express, Hapi, ...
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Render React components
        </Heading>
        <Appear>
          <Code textColor="white">ReactDOM.renderString()</Code>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={1} caps lineHeight={1}>
          Seems straight-forward enough, right?
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          But... our code may not be so simple
        </Heading>
      </Slide>
      <Slide>
        <Heading size={4} textColor="white" lineHeight={1}>
          Using Babel (ES2015+)
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.es2015} lang="js" />
      </Slide>
      <Slide>
        <CodePane source={code.es2015Server} lang="js" />
      </Slide>
      <Slide>
        <Heading size={4} textColor="white" lineHeight={1}>
          Dealing with Webpack's <Code textColor="white">require</Code>
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.requires} lang="js" />
        <Appear>
          <Text>https://github.com/frostney/require-webpack-compat</Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={4} textColor="white" lineHeight={1}>
          Resolving paths
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.resolve} lang="js" />
      </Slide>
      <Slide>
        <CodePane source={code.resolveServer} lang="js" />
      </Slide>
      <Slide>
        <Heading size={4} textColor="white" lineHeight={1}>
          Handling assets
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.assets} lang="js" />
      </Slide>
      <Slide>
        <CodePane source={code.assetsServer} lang="js" />
      </Slide>
      <Slide>
        <Image src={images.samfalling} />
      </Slide>
      <Slide>
        <Heading size={2}>
          At this point... can't we just use Webpack on the server?
        </Heading>
      </Slide>
      <Slide bgImage={images.now} />
      <Slide>
        <Heading size={2}>
          Getting started
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.webpackServer} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} caps>
          Webpack then bundles our server in a similar way as our client side code
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2} caps>
          That's nice and all. But what about...
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2} caps>
          Debugging and error messages?
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.debugging} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} caps>
          Our node modules?
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.nodemodules} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} caps>
          Live reloading
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.hmr} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} lineHeight={2} caps>Summary</Heading>
        <Appear><Heading size={4} textColor="white">Precompiling the server</Heading></Appear>
        <Appear><Heading size={4} textColor="white">No need to handle Webpack specifics</Heading></Appear>
        <Appear><Heading size={4} textColor="white">More configuration</Heading></Appear>
      </Slide>
      <Slide>
        <Heading size={4} textColor="white">https://github.com/RickWong/react-isomorphic-starterkit</Heading>
      </Slide>
      <Slide>
        <Heading size={1} caps lineHeight={3}>Thank you!</Heading>
        <Text>https://frostney.github.io/talks/webpack-server-bundles</Text>
        <Layout>
          <Fill>
            <Text />
          </Fill>
          <Fill>
            <Text>@frostney_</Text>
          </Fill>
        </Layout>
      </Slide>
      <Slide>
        <Heading size={2} textColor="white" caps lineHeight={1}>Credits</Heading>
        <Heading size={4} textColor="white">https://github.com/RickWong/react-isomorphic-starterkit</Heading>
        <Heading size={4} textColor="white">http://jlongster.com/Backend-Apps-with-Webpack--Part-I</Heading>
        <Heading size={4} textColor="white">Supernatural</Heading>
      </Slide>
    </Deck>
  </Spectacle>
);
