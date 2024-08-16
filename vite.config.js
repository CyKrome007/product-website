import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import baseUrl from "./src/assets/BaseUrl.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseUrl
})
