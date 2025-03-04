import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  base: '/Game-Over',
  plugins: [
    react(),
    tailwindcss(),
    ghPages()
  ],
})
