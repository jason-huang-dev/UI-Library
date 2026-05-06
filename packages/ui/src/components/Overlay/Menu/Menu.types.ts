import type { ReactNode } from "react";
import type { MenuProps as MuiMenuProps } from "@mui/material/Menu";

export type MenuItemDefinition = {
  disabled?: boolean;
  divider?: boolean;
  icon?: ReactNode;
  label: ReactNode;
  onClick?: () => void;
  selected?: boolean;
};

export type MenuProps = Omit<MuiMenuProps, "children"> & {
  items: MenuItemDefinition[];
};
