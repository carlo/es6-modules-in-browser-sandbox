// Seamless integration between Rollup and Babel.  Might come in handy if we
// want to use ES7 decorators or s/th; enable it by uncommenting the `import`
// statement and `babel()` call below.
// Website: https://github.com/rollup/rollup-plugin-babel
//
// import babel from 'rollup-plugin-babel';

// Convert CommonJS modules to ES6 so they can be included in a Rollup bundle.
// Website: https://github.com/rollup/rollup-plugin-commonjs
import commonjs from 'rollup-plugin-commonjs';

// Insert node globals including so code that works with browserify should work
// even if it uses process or buffers.
// Website: https://github.com/calvinmetcalf/rollup-plugin-node-globals
import nodeGlobals from 'rollup-plugin-node-globals';

// Locate modules using the Node resolution algorithm, for using third party
// modules in `node_modules/`.
// Website: https://github.com/rollup/rollup-plugin-node-resolve
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  dest: 'dist/bundle.js',
  entry: 'src/main.js',
  format: 'iife',
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
      exclude: [
        'node_modules/rollup-plugin-node-globals/**',
        'node_modules/process-es6/**',
      ],
      include: 'node_modules/**',
    }),
    nodeGlobals(),
  ],
  sourceMap: true,
};
