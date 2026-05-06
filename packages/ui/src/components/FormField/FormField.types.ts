import type { ReactElement, ReactNode } from "react";
import type { FormControlProps } from "@mui/material/FormControl";

export type FormFieldProps = Omit<FormControlProps, "children" | "error"> & {
  children: ReactElement;
  error?: ReactNode;
  helperText?: ReactNode;
  label?: ReactNode;
  required?: boolean;
};
