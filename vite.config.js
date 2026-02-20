import { defineConfig } from "vite"; // Vite config function
import react from "@vitejs/plugin-react"; // React plugin
import tailwindcss from "@tailwindcss/vite"; // Tailwind Vite plugin

export default defineConfig({
  plugins: [
    react(),        // enables React
    tailwindcss(),  // enables Tailwind
  ],
});
