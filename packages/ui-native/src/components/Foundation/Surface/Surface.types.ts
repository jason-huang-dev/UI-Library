import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type SurfaceProps = ViewProps & {
  children: ReactNode;
  muted?: boolean;
};
