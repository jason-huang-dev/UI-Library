import CircularProgress from "@mui/material/CircularProgress";
import { forwardRef } from "react";
import type { LoadingSpinnerProps } from "./LoadingSpinner.types";

export const LoadingSpinner = forwardRef<HTMLSpanElement, LoadingSpinnerProps>(
  function LoadingSpinner(
    {
      color = "primary",
      size = 32,
      thickness = 4,
      ...props
    },
    ref
  ) {
    return (
      <CircularProgress
        ref={ref}
        color={color}
        size={size}
        thickness={thickness}
        {...props}
      />
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";
