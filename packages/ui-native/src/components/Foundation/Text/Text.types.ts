import type { ReactNode } from "react";
import type { TextProps as RNTextProps } from "react-native";

export type NativeTextVariant = "title" | "body" | "caption" | "label";

export type TextProps = RNTextProps & {
  children: ReactNode;
  muted?: boolean;
  variant?: NativeTextVariant;
};
