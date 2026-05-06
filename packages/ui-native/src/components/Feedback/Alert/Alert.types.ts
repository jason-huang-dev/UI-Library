import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type AlertSeverity = "error" | "info" | "success" | "warning";

export type AlertProps = ViewProps & {
  children: ReactNode;
  severity?: AlertSeverity;
  title?: ReactNode;
};
