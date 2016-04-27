### Can we default to CSS for animations now?
Length: ~30 minutes  
Proposed to: CSS Conf BP

Before HTML5 came along, we never really thought about using CSS for animating elements on the screen. With CSS3 we finally got different properties to animate. But it seems developers are still shying away from using CSS when it comes to animations. With vendor prefixes beginning to disappear more and more, let's take a look at some cases where we used to use JavaScript for animations, but may be better suited for CSS animations and transitions.

This talk will be part history lesson, part showcase, part live coding. I will go into detail on how the pros and cons of CSS transitions and animations in terms of performance and maintenance. I will present a few use cases on animations in web sites and web apps from dropdowns, tooltips and character animations (where we used to use GIFs or videos). We will take a look at how this example would look like in JavaScript and how we can simplify them with CSS.

### React for Game Development
Length: ~30 minutes  
Proposed to: React Conf 2016, React Amsterdam, React Europe  
Accepted at: React Amsterdam

Using React for game development may not seem like an obvious choice at first. With React itself being compared to the Doom 3 game engine at F8 2014, we may not find ourselves in such a bad spot. We will take a look at how games are usually structured. Then we will examine different concepts in game development such as the entity-component pattern, game loops, and how we can implement them in React.

### Webpack for server bundles
Length: ~25 minutes

We have embraced Webpack for our client-side bundles, bundling all our client-side assets and customizing them along the way. With isomorphic/universal JavaScript being treated as the holy grail right now, let's consider using Webpack for our server as well. Where are the differences to how we usually write our Node.js server? We will go into pitfalls, advantanges and disadvantages. We will cover how to setup Webpack for Node.js server, how to optimize them and how get features like live-reloading and the Webpack Dev Server working in this environment.

### Let's talk about Sketch & Zeplin
Length: ~30 minutes

When developers receive mockups from designers, developers may not implement theses mockups as pixel perfect as designers might expect them to be. Zeplin is a tool that creates specifications out of Sketch files. We will be going through the workflow of using Sketch with Zeplin and how it translates to creating user interfaces quicker and more precisely.

### Let's talk about Rollup
Length: ~25 minutes

Rollup is a new bundler that has been getting a lot of attention recently. Projects like PouchDB are using Rollups for all of their builds these days. We'll go into what makes Rollup special, how it compares to other bundlers like Webpack in terms of philosophy and handling and what this fancy `js:next` property is.

### Let's talk about AVA
Length: ~30 minutes

AVA touts itself as being a futuristic test runner. It bundles with Babel and allows your tests to be written in ECMAScript 2015+. We'll go into use cases of how we would write different kind of tests with AVA, from the simple checking equality over to asynchronous tests.

### Obfuscate into Obscurity
Length: ~30 minutes  
Proposed to: JSConf Iceland

If we take this piece of JavaScript `var myFunction = () => 42;`. How far can we go to still have executable but non-human readable version of  

### Let's develop a React-powered game in 30 minutes
Length: ~30 minutes
Proposed to: React Rally

It's probably fair to assume that React is not your typical choice when it comes to game development. Surprisingly though, creating games with React is way easier and more fun than one would expect it to be. During this talk we will take a look at a typical game development process example by example. With each example we will be implementing a new feature until we have a playable prototype to show for by the end of the talk.

I have previously spoken at another conference about using React for game development. That talk was focusing more on the theory on game development and sprinkled in same interactive live coding examples every now and again. Back then, the audience really liked the interactivity and the live coding which is what I would like to expand on with this talk. Consequently, the focus here would be more on live coding than on the theory behind it. 

I would keep a similar structure to my previous React game development talk and we will be implementing a pirate based game:
- Entity-component pattern (Placing ships on the screen)
- User events (moving ships around, shooting cannon balls)
- Animation (moving the enemy)
- Collision (explaining the term game loop and being able to hit enemies)
- What's next? A look into what we could or need to do from turning that the prototype into a real game

At the end we would have a very basic game with a core game mechanic.

All of the live coding would happen in the slides themselves, reducing the switching around different windows/workspaces and slides and it won't crash and burn as badly. :)

Intended audience: Beginner and intermediate level
Intended outcome: The audience gains a different perspective of what we can do with React besides the usual single-page app or client-server application.

### Can we stop using lowercased components now?
Proposed to: React Rally

React is an amazing abstraction layer: Once we have created a component, we don't really need to care about how it is implemented or what happens under the hood. As long as we pass in the props that are expected we get the component on the screen. We don't really need to care if it's DOM, Canvas or WebGL in the background. Where will this lead ultimately? Could this even go so far that don't really need to care about the platform we are on? Would we be able write truly cross-platform code with React at some point?

The rough outline of this talk would be:
- Short refresher on how components work and what we can abstract away safely (Using React-Bootstrap as an example)
- Targeting other backends than DOM (using React Canvas as an example)
- Cross-platform code with React Native (using react-native-web)
- If we were to implement something like that for ourselves, what are the things we would need to consider? Code examples will show important steps along the way
- Going through caveats, pitfalls and things to consider when are abstracting away that much (The feeling of having a black box, not being able to customize as much, etc.)


Intended audience: Intermediate
Takeaway: Try to find the balance between abstracting away implementation details versus the need to control the implementation details.
