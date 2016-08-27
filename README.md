## ES6 w/ modules w/o transpiling to ES5

I want to prototype browser code using ES6. I don't want the code to be compiled
to ES5. I want to use ES6 modules, though. This little repo does exactly that: I
set up [Rollup](http://rollupjs.org/) with a few plugins to leave the ES6 code
alone while adding a wafer-thin layer to deal with modules (my own and those in
`node_modules/`).

Remember, the entire thing is targetted at prototyping stuff in ES6-capable
browsers. For good measure the HTML page includes the right polyfills for the
currently active browser, c/o [polyfill.io](https://polyfill.io/v2/docs/).

**THIS IS STILL A WORK IN PROGRESS.** Also, I might loose interest tomorrow.

So, to recap, this here setup …

- scratches an itch of mine
- lets me write ES6
- lets me use ES6 modules
- hands the ES6 code to the browsers without transpiling it to ES5 first
- gives me source maps in Chrome et al
- is based on Rollup, (very) few plugins and a bit of duct tape


### Why?

Because [browser support for ES6](http://kangax.github.io/compat-table/es6/) is
pretty solid by now.  Not perfect, but we're getting there.  I understand why
it's highly advised to compile ES6 code to ES5 for production use -- but for
simple prototyping and tinkering I don't want that anymore.


### Setup

Running node 6, just do a `npm install` to set up the dependencies.


### npm tasks

- `start`: **main task**, starts HTTP server and FS watcher
- `build`: generates the JS bundle in `dist/` & copies the `index.html` there
- `serve`: fires up `http-server` on port 8080
- `watch`: continuously listens for changes in the JS files and triggers the
  build process


### Building

`npm run build` will take the code from `src/`, roll the dice and put the
output in `dist/`.

Once done, open `dist/index.html` in your browser and check its Web
Inspector.


## License

    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
    Version 2, December 2004

    Copyright (C) 2015 Carlo Zottmann, Munich, Germany.
    Everyone is permitted to copy and distribute verbatim or modified
    copies of this license document, and changing it is allowed as long
    as the name is changed.

    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

    0. You just DO WHAT THE FUCK YOU WANT TO.
