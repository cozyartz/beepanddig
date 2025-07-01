// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://beepanddig.com',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(), // <-- Use the official Astro Tailwind integration
  ],
  vite: {
    optimizeDeps: {
      include: [
        'framer-motion',
        'swiper',
        '@fortawesome/react-fontawesome',
        '@fortawesome/pro-solid-svg-icons',
        '@fortawesome/pro-regular-svg-icons',
      ],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'swiper': ['swiper'],
            'fontawesome': [
              '@fortawesome/react-fontawesome',
              '@fortawesome/pro-solid-svg-icons',
              '@fortawesome/pro-regular-svg-icons',
            ],
          },
        },
      },
    },
  },
});
