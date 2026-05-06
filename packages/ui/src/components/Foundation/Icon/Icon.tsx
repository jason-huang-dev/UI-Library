import MuiSvgIcon from "@mui/material/SvgIcon";
import { forwardRef } from "react";
import type { IconProps } from "./Icon.types";

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  function Icon(
    {
      children,
      decorative = false,
      title,
      ...props
    },
    ref
  ) {
    return (
      <MuiSvgIcon
        ref={ref}
        aria-hidden={decorative ? true : undefined}
        role={decorative ? undefined : "img"}
        titleAccess={decorative ? undefined : title}
        {...props}
      >
        {children}
      </MuiSvgIcon>
    );
  }
);

Icon.displayName = "Icon";
