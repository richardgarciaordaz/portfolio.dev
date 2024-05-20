import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import astroI18next from "astro-i18next";

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(),tailwind()],
  site: 'https://richardgarciaordaz.github.io', // Reemplaza 'astronaut' con tu nombre de usuario de GitHub
  base: 'portfolio.dev'

});