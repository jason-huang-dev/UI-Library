import type { ReactNode } from "react";
import type { TextFieldProps } from "../TextField";

export type SelectOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string | number;
};

export type SelectProps = Omit<TextFieldProps, "children" | "select"> & {
  options: SelectOption[];
};
