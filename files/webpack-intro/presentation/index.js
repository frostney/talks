// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
//  BlockQuote,
//  Cite,
  CodePane,
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
  theroadsofar: require("../assets/theroadsofar.jpg"),
  now: require("../assets/now.jpg"),
  samfalling: require("../assets/samfalling.gif"),
  memberberry: require("../assets/memberberry.jpg")
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
  hmr: require("raw!../assets/hmr.example"),
  scriptorder: require("raw!../assets/scriptorder.example"),
  moduleAmd: require("raw!../assets/module_amd.example"),
  moduleCommonjs: require("raw!../assets/module_commonjs.example"),
  moduleES: require("raw!../assets/module_es2015.example"),
  webpack1: require("raw!../assets/webpack1.example"),
  webpack2: require("raw!../assets/webpack2.example"),
  webpack3: require("raw!../assets/webpack3.example"),
  webpack4: require("raw!../assets/webpack4.example"),
  webpackShell: require("raw!../assets/webpack_shell.example")
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
          Introduction to Webpack
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
          What is Webpack?
        </Heading>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>A module bundler</Heading>
        </Appear>
      </Slide>
      <Slide>
        <Image src={images.memberberry} />
      </Slide>
      <Slide>
        <CodePane source={code.scriptorder} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Module systems
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.moduleCommonjs} lang="js" />
      </Slide>
      <Slide>
        <CodePane source={code.moduleAmd} lang="js" />
      </Slide>
      <Slide>
        <CodePane source={code.moduleES} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Enter Webpack...
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.webpack1} lang="js" />
      </Slide>
      <Slide>
        <CodePane source={code.webpackShell} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Loaders
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.webpack2} lang="js" />
      </Slide>
      <Slide>
        <CodePane source={code.webpack3} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Plugins
        </Heading>
      </Slide>
      <Slide>
        <CodePane source={code.webpack4} lang="js" />
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Tree shaking
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          Code splitting
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2} caps lineHeight={1}>
          What else?
        </Heading>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>Debugging</Heading>
        </Appear>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>UMD builds for library authors</Heading>
        </Appear>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>Live reloading</Heading>
        </Appear>
        <Appear>
          <Heading size={4} caps textColor="white" lineHeight={1}>Different targets</Heading>
        </Appear>
      </Slide>
      <Slide>
        <CodePane source={code.webpackServer} lang="js" />
      </Slide>
      <Slide>
        <Heading size={1} caps lineHeight={3}>Thank you!</Heading>
        <Text>https://frostney.github.io/talks/webpack-intro</Text>
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
