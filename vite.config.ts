import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from 'vite-plugin-vuetify'

export default defineConfig(async () => ({
  plugins: [
    vue(),
    vuetify({
      styles: { configFile: 'src/settings.scss' }
    }),
  ],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },
  envPrefix: ["VITE_", "TAURI_"],
}));
