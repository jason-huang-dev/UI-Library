import { colors } from "./colors";

export type ThemeMode = "light" | "dark";

export const darkTheme = {
  mode: "dark",

  color: {
    background: colors.brand.onyx,
    backgroundSubtle: colors.brand.charcoal,
    backgroundElevated: colors.neutral[800],
    backgroundStrong: colors.neutral[950],

    surface: colors.neutral[900],
    surfaceSubtle: colors.neutral[800],
    surfaceElevated: colors.brand.charcoal,

    border: colors.brand.slate,
    borderSubtle: "rgba(216, 221, 227, 0.14)",
    borderStrong: "rgba(212, 175, 106, 0.48)",

    text: colors.brand.ivory,
    textMuted: "rgba(247, 244, 238, 0.72)",
    textSubtle: "rgba(247, 244, 238, 0.52)",
    textInverse: colors.brand.onyx,

    primary: colors.brand.champagneGold,
    primaryHover: colors.gold[300],
    primaryActive: colors.gold[600],
    primaryText: colors.brand.onyx,

    secondary: colors.brand.electricWater,
    secondaryHover: colors.water[300],
    secondaryActive: colors.water[700],
    secondaryText: colors.brand.onyx,

    focus: colors.brand.electricWater,

    success: colors.status.success,
    warning: colors.status.warning,
    danger: colors.status.danger,
    info: colors.status.info
  }
} as const;

export const lightTheme = {
  mode: "light",

  color: {
    background: colors.brand.ivory,
    backgroundSubtle: colors.brand.warmSand,
    backgroundElevated: colors.neutral[0],
    backgroundStrong: colors.brand.deepNavy,

    surface: colors.neutral[0],
    surfaceSubtle: "#F2EBDD",
    surfaceElevated: colors.neutral[0],

    border: colors.brand.softGray,
    borderSubtle: "rgba(13, 27, 42, 0.12)",
    borderStrong: "rgba(212, 175, 106, 0.56)",

    text: colors.brand.deepNavy,
    textMuted: "rgba(13, 27, 42, 0.72)",
    textSubtle: "rgba(13, 27, 42, 0.52)",
    textInverse: colors.brand.ivory,

    primary: colors.brand.champagneGold,
    primaryHover: colors.gold[500],
    primaryActive: colors.gold[700],
    primaryText: colors.brand.onyx,

    secondary: colors.brand.waterBlue,
    secondaryHover: colors.water[500],
    secondaryActive: colors.water[700],
    secondaryText: colors.neutral[0],

    focus: colors.brand.waterBlue,

    success: colors.status.success,
    warning: colors.status.warning,
    danger: colors.status.danger,
    info: colors.status.info
  }
} as const;

export const themes = {
  light: lightTheme,
  dark: darkTheme
} as const;

export function createTheme(mode: ThemeMode = "dark") {
  return themes[mode];
}

export type Theme = typeof darkTheme;