import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type MenuItemDefinition = {
  disabled?: boolean;
  label: ReactNode;
  onPress?: () => void;
};

export type MenuProps = ViewProps & {
  items: MenuItemDefinition[];
  open?: boolean;
};
