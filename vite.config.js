import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the built site works at a domain root or under a subpath
// such as a GitHub Pages project site (https://user.github.io/<repo>/).
export default defineConfig({
  base: './',
  plugins: [react()],
})
