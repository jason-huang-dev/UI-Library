import { createTheme } from "@mui/material/styles";

import { radii } from "../../../packages/tokens/src/radii";
import { darkTheme, lightTheme, type ThemeMode } from "../../../packages/tokens/src/themes";
import { typography } from "../../../packages/tokens/src/typography";

const lightActionColors = {
  primary: lightTheme.color.text,
  secondary: lightTheme.color.secondaryActive,
  success: "#1F7A4D",
  warning: "#7F5B22",
  error: "#B42318",
  info: lightTheme.color.secondaryActive
};

function createMuiTheme(mode: ThemeMode) {
  const tokenTheme = mode === "dark" ? darkTheme : lightTheme;
  const accessibleText = mode === "dark"
    ? darkTheme.color.textInverse
    : lightTheme.color.text;
  const actionColors = mode === "dark"
    ? {
        primary: tokenTheme.color.primary,
        secondary: tokenTheme.color.secondary,
        success: tokenTheme.color.success,
        warning: tokenTheme.color.warning,
        error: tokenTheme.color.danger,
        info: tokenTheme.color.info
      }
    : lightActionColors;

  return createTheme({
    palette: {
      mode,
      background: {
        default: tokenTheme.color.background,
        paper: tokenTheme.color.surface
      },
      primary: {
        main: actionColors.primary,
        contrastText: tokenTheme.color.primaryText
      },
      secondary: {
        main: actionColors.secondary,
        contrastText: tokenTheme.color.secondaryText
      },
      success: {
        main: actionColors.success,
        contrastText: accessibleText
      },
      warning: {
        main: actionColors.warning,
        contrastText: accessibleText
      },
      error: {
        main: actionColors.error,
        contrastText: accessibleText
      },
      info: {
        main: actionColors.info,
        contrastText: accessibleText
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
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => {
            if (ownerState.variant !== "contained") {
              return {};
            }

            const color = ownerState.color ?? "primary";
            const containedColors = {
              primary: {
                background: tokenTheme.color.primary,
                hover: tokenTheme.color.primaryHover,
                active: tokenTheme.color.primaryActive,
                text: tokenTheme.color.primaryText
              },
              secondary: {
                background: tokenTheme.color.secondary,
                hover: tokenTheme.color.secondaryHover,
                active: tokenTheme.color.secondaryActive,
                text: tokenTheme.color.secondaryText
              },
              success: {
                background: tokenTheme.color.success,
                hover: tokenTheme.color.success,
                active: tokenTheme.color.success,
                text: accessibleText
              },
              warning: {
                background: tokenTheme.color.warning,
                hover: tokenTheme.color.warning,
                active: tokenTheme.color.warning,
                text: accessibleText
              },
              error: {
                background: tokenTheme.color.danger,
                hover: tokenTheme.color.danger,
                active: tokenTheme.color.danger,
                text: accessibleText
              },
              info: {
                background: tokenTheme.color.info,
                hover: tokenTheme.color.info,
                active: tokenTheme.color.info,
                text: accessibleText
              }
            };

            if (!(color in containedColors)) {
              return {};
            }

            const colors = containedColors[color as keyof typeof containedColors];

            return {
              backgroundColor: colors.background,
              color: colors.text,
              "&:hover": {
                backgroundColor: colors.hover
              },
              "&:active": {
                backgroundColor: colors.active
              }
            };
          }
        }
      }
    }
  });
}

export const storybookThemes = {
  light: createMuiTheme("light"),
  dark: createMuiTheme("dark")
};
