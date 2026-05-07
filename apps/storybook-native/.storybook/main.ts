import type { StorybookConfig } from "@storybook/react-vite";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);

const uiNativeSource = fileURLToPath(
  new URL("../../../packages/ui-native/src/index.ts", import.meta.url)
);
const vynoraUiSource = fileURLToPath(
  new URL("../../../packages/vynora-ui/src/index.ts", import.meta.url)
);
const tokensSource = fileURLToPath(
  new URL("../../../packages/tokens/src/index.ts", import.meta.url)
);
const reactNativeSvgElementsWeb = require.resolve("react-native-svg/lib/module/elements.web.js");

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: [
    "../../../packages/ui-native/src/**/*.stories.@(ts|tsx|mdx)",
    "../../../packages/vynora-ui/src/**/*.stories.@(ts|tsx|mdx)"
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  typescript: {
    reactDocgen: false
  },
  viteFinal: (config) => ({
    ...config,
    base: "/native/",
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@jason-ui/ui-native": uiNativeSource,
        "@jason-ui/tokens": tokensSource,
        "vynora-ui": vynoraUiSource,
        "react-native-svg": reactNativeSvgElementsWeb,
        "react-native": require.resolve("react-native-web")
      }
    }
  })
};

export default config;
