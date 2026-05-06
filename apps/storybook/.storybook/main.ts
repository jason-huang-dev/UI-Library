import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";

const uiSource = fileURLToPath(
  new URL("../../../packages/ui/src/index.ts", import.meta.url)
);
const tokensSource = fileURLToPath(
  new URL("../../../packages/tokens/src/index.ts", import.meta.url)
);

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../../../packages/ui/src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  viteFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@jason-ui/ui": uiSource,
        "@jason-ui/tokens": tokensSource
      }
    }
  })
};

export default config;
