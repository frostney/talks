// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
//  BlockQuote,
//  Cite,
  CodePane,
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

// import SceneDirector from "react-scenedirector";
// import SpriteSheet from "react-spritesheet";

// import Playground from "component-playground";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./theme";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// import codeText from "raw!./component.example";
// import codeText2 from "raw!./component2.example";

const images = {
  dannyQuote: require("../assets/danny_quote.png"),
  underthehood: require("../assets/underthehood.jpg"),
  contextproblem: require("../assets/contextproblem.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4f4f4f",
  secondary: "#fff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress="bar" transitionDuration={400} controls={false}>
          <Slide bgColor="primary" notes="Hi, my name is Joe and I'll be talking about providing custom themes in your React app. We'll be going into what the concerns are and look into solutions that are currently available.">
            <Heading size={1} fit caps lineHeight={5} textColor="white">
              Individual paint for your React components
            </Heading>
            <Heading size={2}>🎨</Heading>
            <Heading size={6} textColor="white" lineHeight={3}>ReactJS Day 2016</Heading>
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
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              When do we need themes?
            </Heading>
          </Slide>
          <Slide notes="When choosing a traditional UI framework like Bootstrap or Foundation, I was longing for more. Since I really liked the way I was defining my routes in JSX with React Router, I wanted something similar for theming. Instead of being able to author my theme-related logic in JSX, CSS or preprocessors are the way to go. The components structure that we have in the app does not really apply to CSS and we always have context switches between styling our component and modifying our component.">
            <Heading size={1} fit caps lineHeight={2}>
              Theming in React
            </Heading>
            <Appear>
              <Heading size={4} fit caps lineHeight={2} textColor="#fff">
                When using a "traditional" UI framework
              </Heading>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>CSS/LESS/SASS > React components</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>Context switching between style and components</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>Is there a React way?</Text>
            </Appear>
          </Slide>
          <Slide>
            <Image src={images.underthehood} />
          </Slide>
          <Slide notes="So there is an obvious solution. Everything that is theme-related should live as inline styles. And that works, until someone needs to hack on styles, puts in an important somwehere and everything is totally messed up now. But, inline styles are the only option if we are going React Native. So I think we are onto something here.">
            <Heading size={1} fit caps lineHeight={2}>
              Inline styles to the rescue?
            </Heading>
            <Appear>
              <Text lineHeight={1.5}>Mixing works, unless something <S type="italic">!important</S> comes up</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>The only option for React Native</Text>
            </Appear>
          </Slide>
          <Slide notes="Let's talk API. How should we able to define themes? In its simplest form, we could just allow styles to be pased through everywhere. But it feels too much of being a quick and dirty solution, since it does not provide any constraints. Usually, we would just some style changes applied through themes instead of allowing everything to be potentially changed.">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/turtles_all_the_way.example")}
            />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              How to deliver those styles?
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              <S type="italic"> EventEmitter</S> maybe?
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/eventemitter.example")}
            ranges={[
              { loc: [0, 31] },
              { loc: [2, 10] },
              { loc: [11, 30] }
            ]}
          />
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              Putting the themes into app state management?
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/theme_in_state.example")}
            ranges={[
              { loc: [0, 15] },
              { loc: [3, 8] },
              { loc: [9, 14] }
            ]}
          />
          <Slide notes="One of the questions we might have when implementing theming is if we should use context. And the answer is and I am paraphrasing Dan Abramov here: Avoid it if you can">
            <Heading size={1} fit caps lineHeight={2}>
              Should we use <S type="italic">context</S>?
            </Heading>
            <Image src={images.dannyQuote} />
          </Slide>
          <Slide notes="HoCs are great, they encapsulate the internals and it really does not matter if we are resorting to using context under the hood. Let's imagine a withStyle HoC that takes in a component and the colors. Those are being passed into our component as props. Going a step further, we could centralize these styles. And even a step further, we could then define our theme switching logic in JSX.">
            <Heading size={2} fit caps lineHeight={2}>I'll <S type="italic">HoC</S> you up</Heading>
            <Appear>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/step1.example")}
              />
            </Appear>
            <div style={{ marginTop: 20 }} />
            <Appear>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/step2.example")}
              />
            </Appear>
          </Slide>
          <Slide note="Now we could either implement that all on our own or use something the good folks over at AirBnB open sourced recently. There's one caveat though: It's only working in environments where you fully commited to inline styles.">
            <Heading size={1} fit caps lineHeight={2}>
              react-with-styles
            </Heading>
            <Appear>
              <Text lineHeight={1.5}>https://github.com/airbnb/react-with-styles</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>Works with Aphrodite, JSS and React Native</Text>
            </Appear>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/react_with_styles.example")}
            ranges={[
              { loc: [0, 21] },
              { loc: [6, 9] },
              { loc: [10, 11] },
              { loc: [12, 14] },
              { loc: [15, 20] }
            ]}
          />
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              The problem with <S type="italic">context</S>
            </Heading>
            <Appear>
              <Image src={images.contextproblem} />
            </Appear>
            <Link href="https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076#.44w62hnhe">Michel Westrate's excellent blog post</Link>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              But I strongly dislike inline styles!
            </Heading>
            <Appear>
              <Text lineHeight={1.5}>Inline styles !== "style" attribute</Text>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              react-css-themr
            </Heading>
            <Appear>
              <Text lineHeight={1.5}>https://github.com/javivelasco/react-css-themr</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>Theming with React with CSS Modules</Text>
            </Appear>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/react_with_cssmodstyles.example")}
            ranges={[
              { loc: [0, 26] },
              { loc: [3, 15] },
              { loc: [17, 25] }
            ]}
          />
          <Slide>
            <Heading size={1} caps lineHeight={1}>Thank you!</Heading>
            <Heading size={2}>🍻</Heading>
            <Layout>
              <Fill>
                <Text>@frostney_</Text>
              </Fill>
              <Fill>
                <Text />
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
