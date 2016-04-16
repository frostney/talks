// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
//  BlockQuote,
//  Cite,
//  CodePane,
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
  Text,
  Table,
  TableRow,
  TableItem
} from "spectacle";

import SceneDirector from "react-scenedirector";
import SpriteSheet from "react-spritesheet";

import Playground from "component-playground";

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
import codeText2 from "raw!./component2.example";

const images = {
  city: require("../assets/city.jpg"),
  toptal: require("../assets/toptal.png"),
  unity: require("../assets/unity.png"),
  unreal: require("../assets/unreal.png"),
  step1: require("../assets/step1.png"),
  step2: require("../assets/step2.png"),
  step3: require("../assets/step3.png"),
  step4: require("../assets/step4.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  cryengine: require("../assets/cryengine.svg"),
  phaser: require("../assets/phaser.png"),
  impact: require("../assets/impact.png"),
  fightclub: require("../assets/fightclub.jpg"),
  markdown: require("../assets/markdown.png"),
  "f8-2014": require("../assets/f8_2014.png"),
  "f8-2014-2": require("../assets/f8_2014_2.png"),
  barney: require("../assets/barney.gif"),
  darkside: require("../assets/darkside.jpg"),
  berlinminijam: require("../assets/berlinminijam.gif"),
  monkeyisland: require("../assets/monkeyisland.jpg"),
  mario: require("../assets/mario.png"),
  bluedragon: require("../assets/bluedragon.png"),
  reddragon: require("../assets/reddragon.png"),
  templar: require("../assets/character_walk_sword.png"),
  water: require("../assets/water.png"),
  ship: require("../assets/ship.png"),
  pirateship: require("../assets/ship_pirate.png"),
  cannonball: require("../assets/cannonball.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4f4f4f",
  secondary: "#fff"
});

/* const Button = ({ buttonStyle, children }) => (
  <button style={buttonStyle}>{children}</button>
); */

const World = ({ children }) => (
  <div style={{
    position: "absolute",
    backgroundImage: `url(${images.water})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%" }}
  >
    {children}
  </div>
);

const Hit = () => <div />;
const BlackFlag = () => <div />;

const Ship = ({ x, y, children }) => {
  const styles = {
    position: "absolute",
    left: x,
    top: y,
    backgroundImage: `url(${images.ship})`,
    backgroundSize: "cover",
    width: 160,
    height: 160
  };

  React.Children.forEach(children, (child) => {
    if (child.type === BlackFlag) {
      styles.backgroundImage = `url(${images.pirateship})`;
    }

    if (child.type === Hit) {
      const filter = "brightness(2.5) hue-rotate(-60deg)";

      styles.filter = filter;
      styles.WebkitFilter = filter;
    }
  });

  return (
    <div style={styles}>{children}</div>
  );
};

const Cannonball = ({ x, y }) => {
  return (
    <div style={{
      position: "absolute",
      left: x,
      top: y,
      backgroundImage: `url(${images.cannonball})`,
      backgroundSize: "cover",
      width: 30,
      height: 30 }}
    />
  );
};

const Healthbar = ({ value, width, height }) => {
  return (
    <div style={{ width, height, marginTop: -6, position: "absolute", backgroundColor: "red", borderRadius: 4 }}>
      <div style={{ width: ((value / 100) * width), height, position: "absolute", backgroundColor: "lime" }} />
    </div>
  );
};

Healthbar.defaultProps = {
  value: 100,
  width: 160,
  height: 5
};

const GameButton = ({ children, onClick }) => (
  <button style={{
    background: "#3498db",
    border: 0,
    borderRadius: 20,
    boxShadow: "0px 5px 0px #2980b9",
    color: "white",
    display: "block",
    fontSize: 18,
    fontWeight: "bold",
    margin: "20px auto",
    minWidth: 200,
    outline: 0,
    padding: 10
  }}
    onClick={onClick}
  >{children}</button>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress="number" transitionDuration={400} controls={false}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={5} textColor="white">
              React For Game Development
            </Heading>
            <Heading size={6} textColor="white" lineHeight={3}>React Amsterdam 2016</Heading>
            <Layout>
              <Fill>
                <Text>Johannes Stein</Text>
              </Fill>
              <Fill>
                <Text>@frostney_</Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="primary" notes="Been an indie developer">
            <Heading size={1} fit caps lineHeight={2}>
              A wild <Link href="https://twitter.com/frostney_">@frostney</Link> appears
            </Heading>
            <Appear>
              <Text lineHeight={1.5}>
                Also known as <S type="bold">Johannes Stein</S> in the real world
              </Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>Regularly participates in game jams</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>Freelance Software Engineer at Toptal</Text>
            </Appear>
            <Appear>
              <Image src={images.toptal} />
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              Managing expectations
            </Heading>
            <Appear>
              <Text lineHeight={1.5}>Demystifying game development</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5}>How typical game development patterns would work in React</Text>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              Game development today
            </Heading>
            <Table>
              <tbody>
              <TableRow>
                <TableItem>
                  <Appear>
                    <Image src={images.unity} width="270" height="98" />
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Image src={images.unreal} width="98" height="98" />
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Image src={images.cryengine} width="250" height="98" />
                  </Appear>
                </TableItem>
              </TableRow>
              </tbody>
            </Table>
            <Appear>
              <Text style={{ marginTop: 60 }}>Or any of these: Torque3D, LÖVE, OpenFL, Allegro, Cocos2D, Blender Game Engine, Flixel, Monkey, Horde3D, LibGDX, Moai SDK, OGRE3D, Irrlicht3D, Stencyl, Game Maker, UbiArt Framework, Sparrow Framework, Starling ...</Text>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={2}>
              Game development today in JavaScript
            </Heading>
            <Table>
              <tbody>
              <TableRow>
                <TableItem>
                  <Appear>
                    <Image src={images.phaser} width="150" height="150" />
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Image src={images.impact} />
                  </Appear>
                </TableItem>
              </TableRow>
              </tbody>
            </Table>
            <Appear>
              <Text style={{ marginTop: 60 }}>Or any of these: EaselJS, pixi.js, Three.js, melonJS, Cocos2D-HTML5, Panda.js, LimeJS, Crafty, Lyria, PlayCanvas ...</Text>
            </Appear>
          </Slide>
          <Slide bgImage={images.fightclub} bgDarken={0.75} notes="explain game jams (hackathons)">
            <Appear>
              <Heading size={1} fit caps lineHeight={2}>
                First rule of game jams*
              </Heading>
            </Appear>
            <Layout style={{ marginTop: -40 }}>
              <Fill />
              <Fill>
                <Appear>
                  <Heading fit size={6} textColor="white">* which also applies to game development</Heading>
                </Appear>
              </Fill>
            </Layout>
            <Appear>
              <Heading size={1}>Use the tools you're most familiar with</Heading>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgImage={images["f8-2014"]} notes="F8 2014 - Pete Hunt" />
          <Slide transition={["fade"]} bgImage={images["f8-2014-2"]} />
          <Slide>
            <Heading size={1} caps lineHeight={1}>
              So... if React is like Doom 3, can we develop games with React?
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/phaser.example")}
            ranges={[
              { loc: [0, 24], title: "http://phaser.io/examples/v2/sprites/sprite-rotation" },
              { loc: [0, 3] },
              { loc: [4, 7] },
              { loc: [10, 16] },
              { loc: [17, 20] },
              { loc: [21, 24] }
            ]}
          />
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/phaser_reactify.example")}
            ranges={[
              { loc: [0, 24], title: "Reactify this!" },
              { loc: [0, 2] },
              { loc: [4, 8] },
              { loc: [11, 22] }
            ]}
          />
          <Slide>
            <Heading size={1} caps lineHeight={1}>
              How does a game work?
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Event-based games
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Game progresses with events
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Otherwise the game "stands still"
            </Heading>
          </Slide>
          <Slide>
            <Text>
              Example: Point 'n' Click adventures, Visual novels, "Clickers", turn based games
            </Text>
            <Image src={images.monkeyisland} />
          </Slide>
          <Slide>
            <iframe width="800" height="600" frameBorder="0" src="http://polooo2.github.io/ggj2016/" />
            <Link href="http://polooo2.github.io/ggj2016">http://polooo2.github.io/ggj2016</Link>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Game-loop based games
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Game progresses every frame, ideally at least 60 frames a second
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Every frame we are completely redrawing everything on the screen
            </Heading>
          </Slide>
          <Slide>
            <Text>
              Example: Jump 'n' Runs, RPGs, Action and first-person-games
            </Text>
            <Image src={images.mario} />
          </Slide>
          <Slide>
            <Image src={images.berlinminijam} />
            <Link href="http://frostney.github.io/berlinminigamejam_jan2016">http://frostney.github.io/berlinminigamejam_jan2016</Link>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Techniques in game development
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Game Loop
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Allows the execution of actions every frame
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/gameloop_simple.example")}
            ranges={[ { loc: [0, 3] } ]}
          />
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              In a real-life environment we would actually use <S type="italic">requestAnimationFrame</S>
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/gameloop_advanced.example")}
            ranges={[
              { loc: [0, 29] },
              { loc: [4, 7] },
              { loc: [10, 24] }
            ]}
          />
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              React already re-renders everything for us on every <S type="italic">prop</S> and <S type="italic">state</S> change
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              We shouldn't really mess with that
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              So... let's just force state or prop updates every ~16 ms
            </Heading>
          </Slide>
          <Slide margin={1}>
            <div className="playground-slide scale">
              <Playground codeText={codeText2} scope={{ React, templar: images.templar, AnimatedSpriteSheet: SpriteSheet.AnimatedSpriteSheet }} />
            </div>
            <Link style={{ marginTop: 40, display: "block" }} href="https://github.com/frostney/react-spritesheet">https://github.com/frostney/react-spritesheet</Link>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Dirty rectangle checking
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              You know how we are re-drawing everything each frame?
            </Heading>
          </Slide>
          <Slide transition={["fade"]}>
            <Image src={images.step1} />
          </Slide>
          <Slide transition={["fade"]}>
            <Image src={images.step2} />
          </Slide>
          <Slide transition={["fade"]}>
            <Image src={images.step3} />
          </Slide>
          <Slide transition={["fade"]}>
            <Image src={images.step4} />
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              We get that for free in React! Thanks, virtual DOM!
            </Heading>
            <Appear>
              <Image src={images.barney} />
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Entity Component Pattern
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Composition over inheritance
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Let's think of enemies in games
            </Heading>
          </Slide>
          <Slide>
            <Image src={images.pirateship} />
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              In game development terminology...
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              The base object (ship) would be referred to as an <S type="italic">entity</S>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Behaviors or attributes (attack, cannonballs, crew, inventory, etc) would be referred to as a <S type="italic">component</S>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              We would attach components to entities...
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              entities to entities...
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              and components to components
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              In React, everything is a component
            </Heading>
          </Slide>
          <Slide margin={1}>
            <div className="playground-slide">
              <Playground codeText={require("raw!../assets/composition.example")} scope={{ React, World, Ship, Healthbar, Cannonball, BlackFlag, Hit }} />
            </div>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Scene graph
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Entities in a tree structure
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              We get that for free in React! Thanks, again React!
            </Heading>
            <Appear>
              <Image src={images.barney} />
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Scene management
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              We want to be able the to switch to a scene
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps lineHeight={1}>
              A scene could be a level, a game state or something else
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/scenedirector1.example")}
            ranges={[
              { loc: [0, 18] },
              { loc: [1, 8] },
              { loc: [4, 7] },
              { loc: [10, 16] }
            ]}
          />
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/scenedirector2.example")}
            ranges={[
              { loc: [0, 26] },
              { loc: [5, 8] },
              { loc: [16, 25] },
              { loc: [10, 15] }
            ]}
          />
          <Slide>
            <div className="playground-slide small-font">
              <Playground codeText={require("raw!../assets/scenedirector_demo.example")} scope={{ React, SceneDirector, GameButton }} />
            </div>
            <Link style={{ marginTop: 40, display: "block" }} href="https://github.com/frostney/react-scenedirector">https://github.com/frostney/react-scenedirector</Link>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>Let's summarize</Heading>
          </Slide>
          <Slide>
            <iframe width="800" height="600" frameBorder="0" src="http://frostney.github.io/survivalguide-vampires" />
            <Link href="http://frostney.github.io/survivalguide-vampires">http://frostney.github.io/survivalguide-vampires</Link>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>React Native for Game Development?</Heading>
            <Appear>
              <Heading size={2} caps lineHeight={1}>Learn Once, Write Everywhere</Heading>
            </Appear>
          </Slide>
          <Slide>
            <Appear>
              <Heading size={2} caps lineHeight={1}>Native controls</Heading>
            </Appear>
            <Appear>
              <Heading size={2} caps lineHeight={1}>Look and feel for each platform</Heading>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>In game development...</Heading>
          </Slide>
          <Slide>
            <Appear>
              <Heading size={2} caps lineHeight={1}>We write our own UI</Heading>
            </Appear>
            <Appear>
              <Heading size={2} caps lineHeight={1}>Due to that, we don't care as much about the native look and feel</Heading>
            </Appear>
          </Slide>
          <Slide bgImage={images.darkside} bgDarken={0.75}>
            <Appear>
              <Heading size={2} caps lineHeight={1}>Come to the dark side, we have almost 100% code reuse across platforms</Heading>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} caps lineHeight={1}>Thank you!</Heading>
            <Heading size={5} caps lineHeight={4} textColor="white">Questions?</Heading>
            <Layout>
              <Fill>
                <Text>@frostney_</Text>
              </Fill>
              <Fill>
                <Text>#reactamsterdam</Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={2} textColor="white" caps lineHeight={1}>Credits</Heading>
            <Text><Link href="https://www.youtube.com/watch?v=nYkdrAPrdcw">F8 2014 Rethinking Web Development</Link></Text>
            <Text>LucasArts Entertainment Company LLC - The Secret of Monkey Island</Text>
            <Text>Nintendo - Super Mario Bros.</Text>
            <Text>Lucasfilm Ltd. LLC</Text>
            <Text>20th Century Fox</Text>
            <Text><Link href="http://giphy.com/gifs/how-i-met-your-mother-yes-thumbs-up-3WY8qMF9l3ldK">CBS</Link></Text>
            <Text><Link href="http://gameprogrammingpatterns.com/">Robert Nystrom - Game Programming Patterns</Link></Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
