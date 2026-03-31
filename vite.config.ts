import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solid from 'vite-plugin-solid';

export default defineConfig({
  define: {
    __CDN__: JSON.stringify('https://able.sfo2.cdn.digitaloceanspaces.com/itsnotscary'),
  },
  plugins: [
    solid(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.svg'],
      manifest: {
        name: 'Its Not Scary!',
        short_name: 'Bug Friends',
        description:
          'A fun picture book web app to teach kids that bugs are not scary! Learn about ladybugs, butterflies, bees, and more.',
        theme_color: '#ff8c42',
        background_color: '#fef9f0',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'pwa-512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
          {
            src: 'pwa-512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/able\.sfo2\.cdn\.digitaloceanspaces\.com\/itsnotscary\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-audio',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
