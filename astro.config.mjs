import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://antoinebourgeolet.github.io',
  base: '/cleave',
  output: 'static',
  build: {
    assets: '_astro',
  },
});
