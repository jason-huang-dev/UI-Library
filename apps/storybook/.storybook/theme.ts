import { createTheme } from "@mui/material/styles";

import { radii } from "../../../packages/tokens/src/radii";
import { darkTheme, lightTheme, type ThemeMode } from "../../../packages/tokens/src/themes";
import { typography } from "../../../packages/tokens/src/typography";

function createMuiTheme(mode: ThemeMode) {
  const tokenTheme = mode === "dark" ? darkTheme : lightTheme;

  return createTheme({
    palette: {
      mode,
      background: {
        default: tokenTheme.color.background,
        paper: tokenTheme.color.surface
      },
      primary: {
        main: tokenTheme.color.primary,
        contrastText: tokenTheme.color.primaryText
      },
      secondary: {
        main: tokenTheme.color.secondary,
        contrastText: tokenTheme.color.secondaryText
      },
      success: {
        main: tokenTheme.color.success
      },
      warning: {
        main: tokenTheme.color.warning
      },
      error: {
        main: tokenTheme.color.danger
      },
      info: {
        main: tokenTheme.color.info
      },
      text: {
        primary: tokenTheme.color.text,
        secondary: tokenTheme.color.textMuted,
        disabled: tokenTheme.color.textSubtle
      },
      divider: tokenTheme.color.border
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
}

export const storybookThemes = {
  light: createMuiTheme("light"),
  dark: createMuiTheme("dark")
};
