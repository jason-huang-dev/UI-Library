import type { ReactNode } from "react";
import type { FormControlLabelProps } from "@mui/material/FormControlLabel";
import type { SwitchProps as MuiSwitchProps } from "@mui/material/Switch";

export type SwitchProps = MuiSwitchProps & {
  label?: ReactNode;
  labelPlacement?: FormControlLabelProps["labelPlacement"];
};
