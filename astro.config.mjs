// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://beepanddig.com',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],
  vite: {
    plugins: [tailwind()],
    optimizeDeps: {
      include: [
        'framer-motion',
        'swiper',
        'lucide-react',
      ],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'swiper': ['swiper'],
            'lucide': ['lucide-react'],
          },
        },
      },
    },
  },
});
