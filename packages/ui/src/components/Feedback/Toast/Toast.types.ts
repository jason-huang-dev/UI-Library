import type { ReactNode } from "react";
import type { AlertProps } from "../Alert";
import type { SnackbarProps } from "@mui/material/Snackbar";

export type ToastProps = Omit<SnackbarProps, "children" | "message"> & {
  action?: AlertProps["action"];
  message: ReactNode;
  severity?: AlertProps["severity"];
  title?: ReactNode;
  variant?: AlertProps["variant"];
};
