// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Image,
  Quote,
  Slide,
  Appear,
  List,
  ListItem,
  CodePane,
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

const output1 = `While \`RN\` is the default prefix,
  it is recommended to customize the prefix.

📚  Created library EveryoneLikesHelloWorld in \`./EveryoneLikesHelloWorld\`.
🕘  It took 30ms.
➡️  To get started type \`cd ./EveryoneLikesHelloWorld\`

`;

const output2 = `
.
├── README.md
├── android
│   ├── build.gradle
│   └── src
├── index.js
├── ios
│   ├── RNMyLibraryTest.h
│   ├── RNMyLibraryTest.m
│   ├── RNMyLibraryTest.podspec
│   ├── RNMyLibraryTest.xcodeproj
│   └── RNMyLibraryTest.xcworkspace
├── package.json
└── windows
    ├── RNMyLibraryTest
    └── RNMyLibraryTest.sln

7 directories, 8 files
`;

const output3 = `
While \`RN\` is the default prefix,
  it is recommended to customize the prefix.
`;

const output4 = `
Error: The \`RCT\` name prefix is reserved for core React modules.
  Please use a different prefix.`;

const yarnAdd = `yarn add v0.24.5
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
✨  Done in 1.57s.`;

const linkModule = `rnpm-install info Linking react-native-everyone-likes-helloworld android dependency
rnpm-install info Android module react-native-everyone-likes-helloworld has been successfully linked
rnpm-install info Linking react-native-everyone-likes-helloworld ios dependency
rnpm-install info iOS module react-native-everyone-likes-helloworld has been successfully linked`;

const rnInit1 = `
This will walk you through creating a new React Native project in ~/Experiments/MyAwesomeApp
Using yarn v0.24.5`;

const rnInit3 = `To run your app on iOS:
cd ~/MyAwesomeApp
react-native run-ios
- or -
Open ios/MyAwesomeApp.xcodeproj in Xcode
Hit the Run button
To run your app on Android:
cd ~/MyAwesomeApp
Have an Android emulator running (quickest way to get started), or a device connected
react-native run-android
`;

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
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>Scaffolding plugins for React Native</Heading>
          <Heading size={6} textColor="secondary" lineHeight={3}>React Native EU</Heading>
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
            <Code textColor="secondary">create-react-native-app</Code> is amazing 🎉
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            Unfortunately...
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              Using only JavaScript might not be enough
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            We might need native code
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              So we need to eject...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">
              ...or start with <Code textColor="secondary">react-native init</Code>
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Link textColor="secondary" href="http://moduscreate.com/react_native_custom_components_ios/">
            moduscreate.com/<br/>react_native_custom_components_ios
          </Link>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            Can we automate this?
          </Heading>
        </Slide>
        <Slide>
          <Link textColor="secondary" href="https://github.com/frostney/react-native-create-library">
            github.com/frostney/react-native-create-library
          </Link>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40, lineHeight: 0.5 }}>
            <Code textColor="secondary">yarn add global react-native-create-library</Code>
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary" style={{ lineHeight: 0.75 }}>
              (<Code textColor="secondary">npm install -g react-native-create-library</Code>)
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Let's create a library
          </Heading>
          <Terminal output={[
            createCommand("react-native-create-library EveryoneLikesHelloWorld"),
            output1,
            createCommand("cd ./EveryoneLikesHelloWorld"),
            createCommand("tree -L 2", "~/EveryoneLikesHelloWorld"),
            output2
          ]}
          />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            <Code textColor="secondary">/ios/RNEveryoneLikesHelloWorld.m</Code>
          </Heading>
          <CodePane lang="objectivec" lineHighlight="11-14" style={{ fontSize: "0.9rem" }} source={require("raw-loader!../assets/RNEveryoneLikesHelloWorld.m.example")} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            <Code textColor="secondary" style={{ fontSize: "1.4rem" }}>/android/src/main/java/com/reactlibrary/RNEveryoneLikesHelloWorld.m</Code>
          </Heading>
          <CodePane lang="java" lineHighlight="8,24-27" source={require("raw-loader!../assets/RNEveryoneLikesHelloWorldModule.java.example")} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            Support as many platforms as possible
          </Heading>
        </Slide>
        <Slide>
          <List>
            <ListItem>iOS</ListItem>
            <ListItem>Android</ListItem>
            <ListItem>Windows (Thanks @rozele)</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            Ready-to-publish boilerplate
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Let's use the library
          </Heading>
          <Terminal output={[
            createCommand("yarn add react-native-everyone-likes-helloworld", "~/MyReactNativeApp"),
            yarnAdd,
            createCommand("react-native link", "~/MyReactNativeApp"),
            linkModule
          ]}
          />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Let's use the library
          </Heading>
          <CodePane lang="jsx" style={{ fontSize: "1.25rem" }} source={require("raw-loader!../assets/usage.example")} />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            Enforcing best practices
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Warn about prefixes
          </Heading>
          <Terminal output={[
            createCommand("react-native-create-library EveryoneLikesHelloWorld"),
            output3
          ]}
          />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Error on conflicts
          </Heading>
          <Terminal title="~" output={[
            createCommand("react-native-create-library MyLibrary --prefix RCT"),
            output4
          ]}
          />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Inside React Native projects
          </Heading>
          <Terminal title="~" output={[
            createCommand("react-native init MyAwesomeApp"),
            rnInit1,
            yarnAdd,
            rnInit3,
            createCommand("cd MyAwesomeApp"),
            createCommand("yarn add --dev react-native-create-library", "~/MyAwesomeApp"),
            yarnAdd,
            createCommand("react-native create-library MyIntegratedLibrary", "~/MyAwesomeApp")
          ]}
          />
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            There is no one size fits all solution
          </Heading>
        </Slide>
        <Slide>
          <Link textColor="secondary" href="https://github.com/peggyrayzis/react-native-create-bridge">
            github.com/peggyrayzis/react-native-create-bridge
          </Link>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            Supports UI modules
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 40 }}>
            Supports Swift & Kotlin
          </Heading>
        </Slide>
        <Slide>
            <Heading size={1} textColor="secondary" caps lineHeight={1}>Thank you!</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>❤️</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>
            <Text>
              <Link textColor="secondary" href="http://frostney.github.io/talks/react-native-scaffold">frostney.github.io/talks/react-native-scaffold</Link>
            </Text>
            </Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
              <Fill>
                <Text textColor="secondary">#reactnativeeu</Text>
              </Fill>
            </Layout>
          </Slide>
      </Deck>
    );
  }
}
