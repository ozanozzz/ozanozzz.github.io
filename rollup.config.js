import { rollup } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js', // Replace with your main JavaScript file
  output: {
    file: 'dist/bundle.js',
    format: 'iife' // Choose the appropriate format (e.g., 'iife', 'cjs', 'esm')
  },
  plugins: [
    commonjs() // For handling CommonJS modules (if needed)
  ]
};