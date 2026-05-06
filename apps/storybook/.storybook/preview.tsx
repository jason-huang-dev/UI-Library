import type { Preview } from "@storybook/react-vite";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { lightTheme } from "../../../packages/tokens/src/themes";
import { radii } from "../../../packages/tokens/src/radii";
import { typography } from "../../../packages/tokens/src/typography";

const muiTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: lightTheme.color.background,
      paper: lightTheme.color.surface
    },
    primary: {
      main: lightTheme.color.primary,
      contrastText: lightTheme.color.primaryText
    },
    secondary: {
      main: lightTheme.color.secondary,
      contrastText: lightTheme.color.secondaryText
    },
    success: {
      main: lightTheme.color.success
    },
    warning: {
      main: lightTheme.color.warning
    },
    error: {
      main: lightTheme.color.danger
    },
    info: {
      main: lightTheme.color.info
    },
    text: {
      primary: lightTheme.color.text,
      secondary: lightTheme.color.textMuted,
      disabled: lightTheme.color.textSubtle
    },
    divider: lightTheme.color.border
  },
  shape: {
    borderRadius: radii.md
  },
  typography: {
    fontFamily: typography.fontFamily.sans,
    fontWeightRegular: typography.fontWeight.regular,
    fontWeightMedium: typography.fontWeight.medium,
    fontWeightBold: typography.fontWeight.bold,
    button: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.normal,
      textTransform: "none"
    }
  }
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
