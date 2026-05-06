import Paper from "@mui/material/Paper";
import { forwardRef } from "react";
import type { SurfaceProps } from "./Surface.types";

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  function Surface(
    {
      children,
      muted = false,
      padding = 3,
      sx,
      ...props
    },
    ref
  ) {
    return (
      <Paper
        ref={ref}
        elevation={0}
        sx={[
          {
            backgroundColor: muted ? "background.default" : "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            color: "text.primary",
            p: padding
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : [])
        ]}
        {...props}
      >
        {children}
      </Paper>
    );
  }
);

Surface.displayName = "Surface";
