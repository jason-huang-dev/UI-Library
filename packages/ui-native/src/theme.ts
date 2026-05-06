import {
  darkTheme,
  lightTheme,
  radii,
  spacing,
  typography,
  type ThemeMode
} from "@jason-ui/tokens";

export type NativeThemeMode = ThemeMode;

export function getNativeTheme(mode: NativeThemeMode = "light") {
  const tokenTheme = mode === "dark" ? darkTheme : lightTheme;

  return {
    color: tokenTheme.color,
    radii,
    spacing,
    typography
  };
}

export const nativeThemes = {
  light: getNativeTheme("light"),
  dark: getNativeTheme("dark")
} satisfies Record<NativeThemeMode, ReturnType<typeof getNativeTheme>>;
