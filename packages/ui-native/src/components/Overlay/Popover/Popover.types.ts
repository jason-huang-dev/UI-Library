import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type PopoverProps = ViewProps & {
  children: ReactNode;
  open?: boolean;
};
