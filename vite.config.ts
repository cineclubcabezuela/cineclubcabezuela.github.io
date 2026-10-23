import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // Rutas relativas: la web funciona igual en la raíz de un dominio
  // o en una subcarpeta (como pasa en GitHub Pages).
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Cineclub Cabezuela',
        short_name: 'Cineclub',
        description: 'Una peli al mes, con charla y picoteo. El carné, el pasaporte de cine y todo lo del club.',
        lang: 'es',
        start_url: './',
        scope: './',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#D8261B',
        background_color: '#D8261B',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // Solo guardamos sin conexión las letras latinas de las fuentes;
        // el resto de alfabetos no se usan en la app.
        globIgnores: ['**/*-vietnamese-*', '**/*-latin-ext-*', '**/*-cyrillic*', '**/*-greek*'],
      },
    }),
  ],
});
