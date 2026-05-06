import react from "@vitejs/plugin-react";
import { createRequire } from "node:module";
import { defineConfig } from "vite";

const require = createRequire(import.meta.url);

export default defineConfig({
  base: "/native-web/",
  plugins: [react()],
  resolve: {
    alias: {
      "react-native": require.resolve("react-native-web")
    }
  }
});
