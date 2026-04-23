// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://niels.freier.fr',
  integrations: [
    mdx(),
    sitemap({
      filenameBase: 'sitemap',
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://niels.freier.fr/') {
          item.priority = 1;
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
