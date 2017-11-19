import babel from 'rollup-plugin-babel';

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'react-clickcopy',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
