import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // oder 'classic' ausprobieren
      babel: {
        plugins: [],
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }),
  ],
})
