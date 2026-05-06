import type { ReactNode } from "react";
import type { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";
import type { FormControlLabelProps } from "@mui/material/FormControlLabel";

export type CheckboxProps = MuiCheckboxProps & {
  label?: ReactNode;
  labelPlacement?: FormControlLabelProps["labelPlacement"];
};
