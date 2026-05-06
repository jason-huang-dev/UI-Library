import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type IconProps = ViewProps & {
  children?: ReactNode;
  label?: string;
  size?: number;
};
