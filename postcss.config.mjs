// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer(),
  ],
};
