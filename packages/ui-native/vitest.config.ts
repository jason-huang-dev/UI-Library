import react from "@vitejs/plugin-react";
import { createRequire } from "node:module";
import { defineConfig } from "vitest/config";

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-native": require.resolve("react-native-web")
    }
  },
  test: {
    environment: "node"
  }
});
