import babel from 'rollup-plugin-babel';

export default {
  input: 'lib/ClickCopy.js',
  output: {
    file: 'dist/react-clickcopy.js',
    format: 'umd',
    name: 'ClickCopy',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
