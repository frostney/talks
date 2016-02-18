### Can we default to CSS for animations now?
Length: ~30 minutes  
Proposed to: CSS Conf BP

Before HTML5 came along, we never really thought about using CSS for animating elements on the screen. With CSS3 we finally got different properties to animate. But it seems developers are still shying away from using CSS when it comes to animations. With vendor prefixes beginning to disappear more and more, let's take a look at some cases where we used to use JavaScript for animations, but may be better suited for CSS animations and transitions.

This talk will be part history lesson, part showcase, part live coding. I will go into detail on how the pros and cons of CSS transitions and animations in terms of performance and maintenance. I will present a few use cases on animations in web sites and web apps from dropdowns, tooltips and character animations (where we used to use GIFs or videos). We will take a look at how this example would look like in JavaScript and how we can simplify them with CSS.

### React for Game Development
Length: ~30 minutes  
Proposed to: React Conf 2015, React Amsterdam, React Europe

Using React for game development may not seem like an obvious choice at first. With React itself being compared to the Doom 3 game engine at F8 2014, we may not find ourselves in such a bad spot. We will take a look at how games are usually structured. Then we will examine different concepts in game development such as the entity-component pattern, object pools, and how we can implement them in React. At the end, we'll take a look at putting it all together into a React-powered game.

### Webpack for server bundles
Length: ~25 minutes

We have embraced Webpack for our client-side bundles, bundling all our client-side assets and customizing them along the way. With isomorphic/universal JavaScript being treated as the holy grail right now, let's consider using Webpack for our server as well. Where are the differences to how we usually write our Node.js server, pitfalls, advantanges and disadvantages. We will cover how to setup Webpack for Node.js server, how to optimize them and how get features like live-reloading and the Webpack Dev Server working in this environment.

### Let's talk about Sketch & Zeplin
Length: ~30 minutes

When developers receive mockups from designers, developers may not implement theses mockups as pixel perfect as designers might expect them to be. Zeplin is a tool that creates specifications out of Sketch files. We will be going through the workflow of using Sketch with Zeplin and how it translates to creating user interfaces quicker and more precisely.

### Let's talk about Rollup
Length: ~25 minutes

Rollup is a new bundler that has been getting a lot of attention recently. Projects like PouchDB are using Rollups for all of their builds these days. We'll go into what makes Rollup special, how it compares to other bundlers like Webpack in terms of philosophy and handling and what this fancy `js:next` property is.

### Let's talk about AVA
Length: ~30 minutes

AVA touts itself as being a futuristic test runner. It bundles with Babel and allows your tests to be written in ECMAScript 2015+. We'll go into use cases of how we would write different kind of tests with AVA, from the simple checking equality over to asynchronous tests.
