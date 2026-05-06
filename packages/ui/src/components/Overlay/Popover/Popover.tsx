import Box from "@mui/material/Box";
import MuiPopover from "@mui/material/Popover";
import { forwardRef } from "react";
import type { PopoverProps } from "./Popover.types";

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  function Popover(
    {
      anchorOrigin = { horizontal: "left", vertical: "bottom" },
      children,
      padding = 2,
      transformOrigin = { horizontal: "left", vertical: "top" },
      ...props
    },
    ref
  ) {
    return (
      <MuiPopover
        ref={ref}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        {...props}
      >
        <Box sx={{ p: padding }}>{children}</Box>
      </MuiPopover>
    );
  }
);

Popover.displayName = "Popover";
