## ES6 w/ modules w/o transpiling to ES5

I want to prototype browser code using ES6. I don't want the code to be compiled
to ES5. I want to use ES6 modules, though. This little repo does exactly that: I
set up [Rollup](http://rollupjs.org/) with a few plugins to leave the ES6 code
alone while adding a wafer-thin layer to deal with modules (my own and those in
`node_modules/`).

Remember, the entire thing is targetted at prototyping stuff in ES6-capable
browsers. For good measure the HTML page includes the right polyfills for the
currently active browser, c/o [polyfill.io](https://polyfill.io/v2/docs/).

So, to recap, this here setup …

- scratches an itch of mine
- lets me write ES6
- lets me use ES6 modules
- hands the ES6 code to the browsers without transpiling it to ES5 first
- gives me source maps in Chrome et al
- is based on Rollup, (very) few plugins and a bit of duct tape


### Why?

Because [browser support for ES6](http://kangax.github.io/compat-table/es6/)
is pretty solid by now.  Not perfect, but we're getting there.


### Setup

Running node 6, just do a `npm install` to set up the dependencies.


### Building

`npm run build` will take the code from `src/`, roll the dice and put the
output in `dist/`.

Once done, open `dist/index.html` in your browser and check its Web
Inspector.
