import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
//tailwinds es un framework de CSS basado en clases y no en componentes
//mdx es una librería para poder agregar variables globales y usarlas en el proyecto

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()]
});