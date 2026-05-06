import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type RadioOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string;
};

export type RadioGroupProps = ViewProps & {
  label?: ReactNode;
  onValueChange?: (value: string) => void;
  options: RadioOption[];
  value?: string;
};
