import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";

import { muiThemes, type ThemeMode } from "../themes";

export type UIProviderProps = {
  mode?: ThemeMode;
  disableCssBaseline?: boolean;
  children: ReactNode;
};

export function UIProvider({
  mode = "light",
  disableCssBaseline = false,
  children
}: UIProviderProps) {
  return (
    <ThemeProvider theme={muiThemes[mode]}>
      {!disableCssBaseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  );
}
