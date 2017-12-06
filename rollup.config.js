import babel from 'rollup-plugin-babel';

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'ClickCopy',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
