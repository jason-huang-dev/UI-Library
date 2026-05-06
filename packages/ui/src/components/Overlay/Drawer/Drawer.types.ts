import type { ReactNode } from "react";
import type { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";

export type DrawerProps = Omit<MuiDrawerProps, "children" | "title"> & {
  actions?: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
  width?: number | string;
};
