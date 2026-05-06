import type { ReactNode } from "react";
import type { IconButtonProps } from "@mui/material/IconButton";
import type { MenuItemDefinition } from "../Menu";

export type ActionMenuProps = Omit<IconButtonProps, "children" | "onClick"> & {
  items: MenuItemDefinition[];
  label?: string;
  trigger?: ReactNode;
};
