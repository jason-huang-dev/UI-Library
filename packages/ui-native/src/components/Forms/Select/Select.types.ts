import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type SelectOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string | number;
};

export type SelectProps = ViewProps & {
  onValueChange?: (value: string | number) => void;
  options: SelectOption[];
  placeholder?: string;
  value?: string | number;
};
