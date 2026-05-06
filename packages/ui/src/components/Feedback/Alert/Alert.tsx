import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";
import type { AlertProps } from "./Alert.types";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(
    {
      severity = "info",
      variant = "outlined",
      ...props
    },
    ref
  ) {
    return (
      <MuiAlert
        ref={ref}
        severity={severity}
        variant={variant}
        {...props}
      />
    );
  }
);

Alert.displayName = "Alert";
