import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { forwardRef } from "react";
import { Alert } from "../Alert";
import type { ToastProps } from "./Toast.types";

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  function Toast(
    {
      action,
      anchorOrigin = { horizontal: "right", vertical: "bottom" },
      autoHideDuration = 6000,
      message,
      severity = "info",
      title,
      variant = "filled",
      ...props
    },
    ref
  ) {
    return (
      <Snackbar
        ref={ref}
        anchorOrigin={anchorOrigin}
        autoHideDuration={autoHideDuration}
        {...props}
      >
        <Alert
          action={action}
          elevation={6}
          severity={severity}
          sx={{ width: "100%" }}
          variant={variant}
        >
          {title ? <AlertTitle>{title}</AlertTitle> : null}
          {message}
        </Alert>
      </Snackbar>
    );
  }
);

Toast.displayName = "Toast";
