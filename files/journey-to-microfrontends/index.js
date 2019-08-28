import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import { Deck, Slide, Layout, Fill, Text, Heading, Link } from "spectacle";
import components from "./presentation/components";
import slides, { transitions } from "./presentation/index.mdx";
import theme from "./presentation/theme";

require("normalize.css");

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

const createDeck = (slides, theme) => (
  <AppContainer errorReporter={CustomErrorReporter}>
    <Deck
      transition={["slide"]}
      progress="number"
      transitionDuration={500}
      theme={theme}
      showFullscreenControl={false}
    >
      <Slide bgColor="primary">
        <Heading size={2} textColor="secondary">
          Journey to Micro-Frontends
        </Heading>
        <br />
        <br />
        <br />
        <br />
        <Layout>
          <Fill>
            <Text textColor="secondary" style={{ fontSize: "1.75rem" }}>
              Johannes Stein
            </Text>
            <Text textColor="secondary" style={{ fontSize: "1.25rem" }}>
              Principal Developer and Team Lead at Gamesys
            </Text>
          </Fill>
          <Fill>
            <Text textColor="secondary" style={{ fontSize: "1.75rem" }}>
              @frostney_
            </Text>
          </Fill>
        </Layout>
      </Slide>
      {slides.map((S, i) => {
        let transition = transitions[i] || null;
        return <S transition={transition} key={`slide-${i}`} />;
      })}
      <Slide>
        <Heading size={1} textColor="secondary" caps lineHeight={1}>
          Thank you!
        </Heading>
        <Heading
          size={2}
          textColor="secondary"
          style={{ marginTop: 40, marginBottom: 40 }}
        >
          ❤️
        </Heading>
        <Heading
          size={2}
          textColor="secondary"
          style={{ marginTop: 40, marginBottom: 40 }}
        >
          <Text>
            <Link
              textColor="secondary"
              href="http://frostney.github.io/talks/journey-to-microfrontends"
            >
              frostney.github.io/talks/journey-to-microfrontends
            </Link>
          </Text>
        </Heading>
        <Layout>
          <Fill>
            <Text textColor="secondary">@frostney_</Text>
          </Fill>
        </Layout>
      </Slide>
    </Deck>
  </AppContainer>
);

ReactDOM.render(createDeck(slides, theme), document.getElementById("root"));

if (module.hot) {
  module.hot.accept(() => {
    const newTheme = require("./presentation/theme").default;
    const newSlides = require("./presentation/index.mdx").default;
    ReactDOM.render(
      createDeck(newSlides, newTheme),
      document.getElementById("root")
    );
  });
}
