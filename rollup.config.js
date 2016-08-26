// Seamless integration between Rollup and Babel.  Might come in handy if we
// want to use ES7 decorators or s/th; enable it by uncommenting the `import`
// statement and `babel()` call below.
// Website: https://github.com/rollup/rollup-plugin-babel
//
// import babel from 'rollup-plugin-babel';

// Convert CommonJS modules to ES6 so they can be included in a Rollup bundle.
// Website: https://github.com/rollup/rollup-plugin-commonjs
import commonjs from 'rollup-plugin-commonjs';

// Locate modules using the Node resolution algorithm, for using third party
// modules in `node_modules/`.
// Website: https://github.com/rollup/rollup-plugin-node-resolve
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  dest: 'dist/bundle.js',
  entry: 'src/main.js',
  format: 'iife',
  intro: 'const global = (typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : (typeof self !== "undefined" ? self : {})));',
  plugins: [
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    nodeResolve({
      browser: true,
      jsnext: true,
      main: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
  sourceMap: true,
};
