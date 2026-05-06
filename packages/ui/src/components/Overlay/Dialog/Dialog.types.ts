import type { ReactNode } from "react";
import type { DialogProps as MuiDialogProps } from "@mui/material/Dialog";

export type DialogProps = Omit<MuiDialogProps, "children" | "title"> & {
  actions?: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
};
