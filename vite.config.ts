import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: 'Ethan Fairfang',
        short_name: 'Ethan',
        icons: [
          { src: '/icon/favicon-220.ico', sizes: '220x220', type: 'image/ico' },
          { src: '/icon/favicon-220.png', sizes: '220x220', type: 'image/png' },
        ],
        start_url: '/',
        theme_color: '#182a41',
        background_color: '#182a41',
        display: 'browser',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,jpg,jpeg,png,webp,gif,svg}'],
        cleanupOutdatedCaches: true,
        navigateFallback: undefined,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkOnly',
          },
          {
            urlPattern: /.*\.js$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'js-cache',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 6 * 60 * 60, // 6 hours
              },
            },
          },
          {
            urlPattern: /.*\.css$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'css-cache',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 6 * 60 * 60, // 6 hours
              },
            },
          },
          {
            urlPattern: /.*\.(?:png|jpg|jpeg|webp|gif|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
