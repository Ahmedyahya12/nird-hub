import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    
    // Désactive le type-checking TS pendant le build
    checker({
      typescript: false,
    })
  ],
})
