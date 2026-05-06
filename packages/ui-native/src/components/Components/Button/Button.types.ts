import type { ReactNode } from "react";
import type { PressableProps } from "react-native";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = Omit<PressableProps, "children"> & {
  children?: ReactNode;
  label?: ReactNode;
  variant?: ButtonVariant;
};
