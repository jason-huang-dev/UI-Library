import type { ReactNode } from "react";
import type { PopoverProps as MuiPopoverProps } from "@mui/material/Popover";

export type PopoverProps = Omit<MuiPopoverProps, "children"> & {
  children: ReactNode;
  padding?: number | string;
};
