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
  twitter: require("./assets/twitter.png"),
  default_export: require("./assets/default_export.png"),
  default_import: require("./assets/default_import.png"),
  named_export: require("./assets/named_export.png"),
  named_import: require("./assets/named_import.png"),
  named_import_ns: require("./assets/named_import_ns.png"),
  export_from_before: require("./assets/export_from_before.png"),
  export_from: require("./assets/export_from.png"),
  export_ns: require("./assets/export_ns.png"),
  treeshaking1: require("./assets/treeshaking1.png"),
  treeshaking2: require("./assets/treeshaking2.png"),
  treeshaking3: require("./assets/treeshaking3.png"),
  browserify_scope: require("./assets/browserify_scope.png"),
  plugins: require("./assets/plugins.png")
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
        <Slide bgColor="primary">
          <Image src={images.twitter} />
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
        <Slide>
          <Heading size={3} textColor="secondary">Default exports</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.default_export} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.default_import} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">Named exports</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.named_export} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.named_import} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">Export extensions (Stage 1)</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.export_from_before} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.export_from} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.export_ns} />
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
        <Slide bgColor="primary">
          <Image src={images.module1} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.module1_compiled} />
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
        <Slide bgColor="primary">
          <Image src={images.treeshaking1} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.treeshaking2} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.treeshaking3} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Scope hoisting</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.browserify_scope} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>REPL</Heading>
        </Slide>
        <Slide>
          <Link textColor="secondary" href="https://rollupjs.org/repl?version=0.51.5&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmltcG9ydCUyMCcuJTJGbGliLmpzJyUzQiUyMiU3RCUyQyU3QiUyMm5hbWUlMjIlM0ElMjJsaWIuanMlMjIlMkMlMjJjb2RlJTIyJTNBJTIydmFyJTIwdW51c2VkRnVuY3Rpb24lM0IlNUNudW51c2VkRnVuY3Rpb24lMjAlM0QlMjBmdW5jdGlvbigpJTdCJTdEJTNCJTVDbiU1Q252YXIlMjB3aXRoU2lkZUVmZmVjdCUyMCUzRCUyMCU3QndpbmRvdyU3RCUzQiU1Q253aXRoU2lkZUVmZmVjdC53aW5kb3cuZGFuZ2Vyb3VzTXV0YXRpb24lMjAlM0QlMjAnbXV0YXRpb24nJTNCJTIyJTdEJTVEJTJDJTIyb3B0aW9ucyUyMiUzQSU3QiUyMmZvcm1hdCUyMiUzQSUyMmVzJTIyJTJDJTIyZ2xvYmFscyUyMiUzQSU3QiU3RCUyQyUyMm5hbWUlMjIlM0ElMjJteUJ1bmRsZSUyMiUyQyUyMmFtZCUyMiUzQSU3QiUyMmlkJTIyJTNBJTIyJTIyJTdEJTdEJTJDJTIyZXhhbXBsZSUyMiUzQW51bGwlN0Q=">Remove unused functions</Link>
        </Slide>
        <Slide>
          <Link textColor="secondary" href="https://rollupjs.org/repl?version=0.51.5&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmZ1bmN0aW9uJTIwVjhFbmdpbmUlMjAoKSUyMCU3QiU3RCU1Q24lNUNuVjhFbmdpbmUucHJvdG90eXBlLnRvU3RyaW5nJTIwJTNEJTIwZnVuY3Rpb24lMjAoKSUyMCU3QiUyMCU1Q24lNUN0cmV0dXJuJTIwJ1Y4JyUzQiU1Q24lN0QlM0IlNUNuJTVDbmZ1bmN0aW9uJTIwVjZFbmdpbmUlMjAoKSUyMCU3QiU3RCU1Q24lNUNuJTJGJTJGJTIwUmVtb3ZlJTIwY29tbWVudCUyMGFuZCUyMHNlZSUyMHdoYXQlMjBoYXBwZW5zJTNBJTVDbiUyRiUyRiUyMFY2RW5naW5lLnByb3RvdHlwZSUyMCUzRCUyMFY4RW5naW5lLnByb3RvdHlwZSUzQiU1Q24lNUNuJTJGJTJGJTIwSWYlMjB5b3UlMjB0aGVuJTIwcmVtb3ZlJTIwdGhpcyUyMG11dGF0aW9uJTJDJTIwVjYlMjB3aWxsJTIwYmUlNUNuJTJGJTJGJTIwdHJlZXNoYWtlbiUyMGFnYWluJTVDblY2RW5naW5lLnByb3RvdHlwZS50b1N0cmluZyUyMCUzRCUyMGZ1bmN0aW9uJTIwKCklMjAlN0IlNUNuJTVDdHJldHVybiUyMCdWNiclM0IlNUNuJTdEJTNCJTVDbiU1Q25jb25zb2xlLmxvZyglMjBuZXclMjBWOEVuZ2luZSgpLnRvU3RyaW5nKCklMjApJTNCJTVDbiUyMiU3RCU1RCUyQyUyMm9wdGlvbnMlMjIlM0ElN0IlMjJmb3JtYXQlMjIlM0ElMjJlcyUyMiUyQyUyMmdsb2JhbHMlMjIlM0ElN0IlN0QlMkMlMjJuYW1lJTIyJTNBJTIybXlCdW5kbGUlMjIlMkMlMjJhbWQlMjIlM0ElN0IlMjJpZCUyMiUzQSUyMiUyMiU3RCU3RCUyQyUyMmV4YW1wbGUlMjIlM0FudWxsJTdE">Mutations across reassignments</Link>
        </Slide>
        <Slide>
          <Link textColor="secondary" href="https://rollupjs.org/repl?version=0.51.5&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmltcG9ydCUyMCU3QiUyMG9iajElMkMlMjBvYmoyJTIwJTdEJTIwJTIwZnJvbSUyMCcuJTJGbGliLmpzJyUzQiU1Q24lNUNub2JqMS5lZmZlY3QoKSUzQiU1Q25vYmoyLm5vRWZmZWN0KCklM0IlNUNuJTVDbiUyRiUyRiUyMFRoZSUyMG5leHQlMjBjYWxsJTIwd2lsbCUyMG5vdCUyMGJlJTIwcmVtb3ZlZCUyMGJlY2F1c2UlMjBvYmoxJTVDbiUyRiUyRiUyMGlzJTIwYWxyZWFkeSUyMGluY2x1ZGVkLiU1Q24lMkYlMkYlMjBGb3IlMjBpbmNsdWRlZCUyMG9iamVjdHMlMkMlMjB3ZSUyMGNhbm5vdCUyMGJlJTIwc3VyZSUyMCh5ZXQpJTVDbiUyRiUyRiUyMGlmJTIwdGhleSUyMGhhdmUlMjBiZWVuJTIwbXV0YXRlZCUzQSU1Q25vYmoxLm5vRWZmZWN0KCklM0IlNUNuJTIyJTdEJTJDJTdCJTIybmFtZSUyMiUzQSUyMmxpYi5qcyUyMiUyQyUyMmNvZGUlMjIlM0ElMjJleHBvcnQlMjBjb25zdCUyMG9iajElMjAlM0QlMjAlN0IlNUNuJTVDdGVmZmVjdCUzQSUyMCgpJTIwJTNEJTNFJTIwY29uc29sZS5sb2coJ0hlbGxvJTIwbWVldHVwIScpJTJDJTVDbiU1Q3Rub0VmZmVjdCUzQSUyMCgpJTIwJTNEJTNFJTIwJTdCJTdEJTVDbiU3RCU1Q24lNUNuZXhwb3J0JTIwY29uc3QlMjBvYmoyJTIwJTNEJTIwJTdCJTVDbiU1Q3Rub0VmZmVjdCUzQSUyMCgpJTIwJTNEJTNFJTIwJTdCJTdEJTVDbiU3RCU1Q24lMjIlN0QlNUQlMkMlMjJvcHRpb25zJTIyJTNBJTdCJTIyZm9ybWF0JTIyJTNBJTIyZXMlMjIlMkMlMjJnbG9iYWxzJTIyJTNBJTdCJTdEJTJDJTIybmFtZSUyMiUzQSUyMm15QnVuZGxlJTIyJTJDJTIyYW1kJTIyJTNBJTdCJTIyaWQlMjIlM0ElMjIlMjIlN0QlN0QlMkMlMjJleGFtcGxlJTIyJTNBbnVsbCU3RA==">Treeshake calls to object literal methods</Link>
        </Slide>
        <Slide>
          <Link textColor="secondary" href="https://rollupjs.org/repl?version=0.51.5&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmltcG9ydCUyMCU3QmZuMSU3RCUyMGZyb20lMjAnLiUyRmxpYi5qcyclM0IlNUNuJTVDbmZuMSgpJTNCJTIyJTdEJTJDJTdCJTIybmFtZSUyMiUzQSUyMmxpYi5qcyUyMiUyQyUyMmNvZGUlMjIlM0ElMjJleHBvcnQlMjBjb25zdCUyMGZuMSUyMCUzRCUyMGZ1bmN0aW9uKCklN0IlNUNuJTVDdHJldHVybiUyMCgpJTIwJTNEJTNFJTIwJTdCJTdEJTNCJTVDbiU3RCgpJTIyJTdEJTVEJTJDJTIyb3B0aW9ucyUyMiUzQSU3QiUyMmZvcm1hdCUyMiUzQSUyMmVzJTIyJTJDJTIyZ2xvYmFscyUyMiUzQSU3QiU3RCUyQyUyMm5hbWUlMjIlM0ElMjJteUJ1bmRsZSUyMiUyQyUyMmFtZCUyMiUzQSU3QiUyMmlkJTIyJTNBJTIyJTIyJTdEJTdEJTJDJTIyZXhhbXBsZSUyMiUzQW51bGwlN0Q=">Remove side-effect-free IIFEs</Link>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Plugins</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Rollup only handles module transformation</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.plugins} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Why Rollup?</Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40 }}>Use webpack for apps, and Rollup for libraries</Heading>
          <Link textColor="secondary" href="https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c">https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c</Link>
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
