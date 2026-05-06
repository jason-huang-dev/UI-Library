import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type FormFieldProps = ViewProps & {
  children: ReactNode;
  error?: ReactNode;
  helperText?: ReactNode;
  label?: ReactNode;
  required?: boolean;
};
