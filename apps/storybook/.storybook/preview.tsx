import type { Preview } from "@storybook/react-vite";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { storybookThemes } from "./theme";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: "light"
  },
  decorators: [
    (Story, context) => {
      const themeMode = context.globals.theme === "dark" ? "dark" : "light";

      return (
        <ThemeProvider theme={storybookThemes[themeMode]}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    }
  ]
};

export default preview;
