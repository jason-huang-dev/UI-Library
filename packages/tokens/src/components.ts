import { spacing } from "./spacing";
import { radii } from "./radii";
import { elevation } from "./elevation";
import { darkTheme, lightTheme, ThemeMode } from "./themes";

const getTheme = (mode: ThemeMode) => {
  return mode === "dark" ? darkTheme : lightTheme;
};

export function createComponentTokens(mode: ThemeMode = "dark") {
  const theme = getTheme(mode);

  return {
    button: {
      base: {
        borderRadius: radii.lg,
        paddingInline: spacing.lg,
        height: 44,
        fontWeight: 600,
        transition: "background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease"
      },

      primary: {
        background: theme.color.primary,
        color: theme.color.primaryText,
        border: `1px solid ${theme.color.primary}`,
        boxShadow: mode === "dark" ? elevation.glowGold : elevation.sm,

        hover: {
          background: theme.color.primaryHover,
          borderColor: theme.color.primaryHover
        },

        active: {
          background: theme.color.primaryActive,
          borderColor: theme.color.primaryActive,
          transform: "translateY(1px)"
        }
      },

      secondary: {
        background: "transparent",
        color: theme.color.secondary,
        border: `1px solid ${theme.color.secondary}`,

        hover: {
          background: mode === "dark"
            ? "rgba(0, 175, 255, 0.12)"
            : "rgba(47, 167, 226, 0.12)"
        }
      },

      ghost: {
        background: "transparent",
        color: theme.color.textMuted,
        border: "1px solid transparent",

        hover: {
          background: theme.color.surfaceSubtle,
          color: theme.color.text
        }
      }
    },

    input: {
      base: {
        height: 44,
        borderRadius: radii.md,
        paddingInline: spacing.md,
        background: theme.color.surface,
        color: theme.color.text,
        border: `1px solid ${theme.color.border}`,
        outline: "none"
      },

      placeholder: {
        color: theme.color.textSubtle
      },

      focus: {
        borderColor: theme.color.focus,
        boxShadow: `0 0 0 3px ${
          mode === "dark"
            ? "rgba(0, 175, 255, 0.24)"
            : "rgba(47, 167, 226, 0.22)"
        }`
      },

      disabled: {
        opacity: 0.56,
        cursor: "not-allowed"
      }
    },

    card: {
      base: {
        borderRadius: radii.xl,
        background: theme.color.surface,
        color: theme.color.text,
        border: `1px solid ${theme.color.borderSubtle}`,
        boxShadow: mode === "dark" ? elevation.md : elevation.sm,
        padding: spacing.lg
      },

      elevated: {
        background: theme.color.surfaceElevated,
        boxShadow: elevation.lg
      },

      accent: {
        borderColor: theme.color.borderStrong,
        boxShadow: mode === "dark" ? elevation.glowGold : elevation.md
      }
    },

    badge: {
      base: {
        borderRadius: radii.pill,
        paddingInline: spacing.sm,
        height: 24,
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.04em"
      },

      gold: {
        background: mode === "dark"
          ? "rgba(212, 175, 106, 0.16)"
          : "rgba(212, 175, 106, 0.22)",
        color: theme.color.primary,
        border: `1px solid ${theme.color.borderStrong}`
      },

      water: {
        background: mode === "dark"
          ? "rgba(0, 175, 255, 0.16)"
          : "rgba(47, 167, 226, 0.16)",
        color: theme.color.secondary,
        border: `1px solid ${theme.color.secondary}`
      }
    },

    table: {
      root: {
        background: theme.color.surface,
        color: theme.color.text,
        border: `1px solid ${theme.color.borderSubtle}`,
        borderRadius: radii.xl,
        overflow: "hidden"
      },

      header: {
        background: theme.color.surfaceSubtle,
        color: theme.color.textMuted,
        borderBottom: `1px solid ${theme.color.border}`,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase"
      },

      row: {
        borderBottom: `1px solid ${theme.color.borderSubtle}`,

        hover: {
          background: mode === "dark"
            ? "rgba(255, 255, 255, 0.04)"
            : "rgba(13, 27, 42, 0.04)"
        }
      }
    },

    nav: {
      item: {
        borderRadius: radii.md,
        color: theme.color.textMuted,

        hover: {
          background: theme.color.surfaceSubtle,
          color: theme.color.text
        },

        active: {
          background: mode === "dark"
            ? "rgba(212, 175, 106, 0.16)"
            : "rgba(212, 175, 106, 0.22)",
          color: theme.color.primary,
          border: `1px solid ${theme.color.borderStrong}`
        }
      }
    },

    divider: {
      color: theme.color.borderSubtle
    }
  } as const;
}