import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type EmptyStateProps = ViewProps & {
  action?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  title: ReactNode;
};
