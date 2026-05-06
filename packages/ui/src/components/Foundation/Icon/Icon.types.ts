import type { ReactNode } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";

export type IconProps = Omit<SvgIconProps, "children" | "titleAccess"> & {
  children: ReactNode;
  decorative?: boolean;
  title?: string;
};
