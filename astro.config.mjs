import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://richardgarciaordaz.github.io', // Reemplaza 'astronaut' con tu nombre de usuario de GitHub
  base: 'portfolio.dev'

});