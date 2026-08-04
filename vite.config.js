import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import injectHTML from 'vite-plugin-html-inject';
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    injectHTML(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        private: resolve(__dirname, 'program-private.html'),
        group: resolve(__dirname, 'program-group.html'),
        tutor: resolve(__dirname, 'tutor.html'),
        testimoni: resolve(__dirname, 'testimoni.html'),
      },
    },
  },
})