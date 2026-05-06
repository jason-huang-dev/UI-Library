import MuiTooltip from "@mui/material/Tooltip";
import { forwardRef } from "react";
import type { TooltipProps } from "./Tooltip.types";

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(
    {
      arrow = true,
      placement = "top",
      ...props
    },
    ref
  ) {
    return (
      <MuiTooltip
        ref={ref}
        arrow={arrow}
        placement={placement}
        {...props}
      />
    );
  }
);

Tooltip.displayName = "Tooltip";
