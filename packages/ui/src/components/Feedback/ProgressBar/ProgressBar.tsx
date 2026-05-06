import LinearProgress from "@mui/material/LinearProgress";
import { forwardRef } from "react";
import type { ProgressBarProps } from "./ProgressBar.types";

export const ProgressBar = forwardRef<HTMLSpanElement, ProgressBarProps>(
  function ProgressBar(
    {
      color = "primary",
      variant = "indeterminate",
      ...props
    },
    ref
  ) {
    return (
      <LinearProgress
        ref={ref}
        color={color}
        variant={variant}
        {...props}
      />
    );
  }
);

ProgressBar.displayName = "ProgressBar";
