import MuiDivider from "@mui/material/Divider";
import { forwardRef } from "react";
import type { DividerProps } from "./Divider.types";

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  function Divider(props, ref) {
    return <MuiDivider ref={ref} {...props} />;
  }
);

Divider.displayName = "Divider";
