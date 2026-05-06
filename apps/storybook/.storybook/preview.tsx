import type { Preview } from "@storybook/react-vite";
import Box from "@mui/material/Box";
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
      const theme = storybookThemes[themeMode];

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              backgroundColor: "background.default",
              color: "text.primary",
              minHeight: context.viewMode === "docs" ? 80 : "100vh",
              padding: 2,
              boxSizing: "border-box"
            }}
          >
            <Story />
          </Box>
        </ThemeProvider>
      );
    }
  ]
};

export default preview;
