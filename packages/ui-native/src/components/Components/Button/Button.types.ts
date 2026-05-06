import type { ReactNode } from "react";
import type { PressableProps } from "react-native";

export type ButtonVariant =
  | "contained"
  | "outlined"
  | "text"
  | "primary"
  | "secondary";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = Omit<PressableProps, "children"> & {
  children?: ReactNode;
  color?: ButtonColor;
  customColor?: string;
  customHoverColor?: string;
  customTextColor?: string;
  label?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};
