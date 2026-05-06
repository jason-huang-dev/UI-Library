import type { Preview } from "@storybook/react-vite";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// Adjust this path to your actual theme location.
import { lightTheme } from "../../../packages/tokens/src/themes";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;