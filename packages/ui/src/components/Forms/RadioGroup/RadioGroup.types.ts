import type { ReactNode } from "react";
import type { FormControlProps } from "@mui/material/FormControl";
import type { RadioGroupProps as MuiRadioGroupProps } from "@mui/material/RadioGroup";

export type RadioOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string;
};

export type RadioGroupProps = Omit<MuiRadioGroupProps, "children"> & {
  disabled?: boolean;
  error?: ReactNode;
  helperText?: ReactNode;
  label?: ReactNode;
  options: RadioOption[];
  required?: boolean;
  size?: "small" | "medium";
  fullWidth?: FormControlProps["fullWidth"];
};
