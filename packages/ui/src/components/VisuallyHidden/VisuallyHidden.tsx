import { forwardRef } from "react";
import type { VisuallyHiddenProps } from "./VisuallyHidden.types";

const visuallyHiddenStyle = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1
} as const;

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  function VisuallyHidden({ children, style, ...props }, ref) {
    return (
      <span
        ref={ref}
        style={{
          ...visuallyHiddenStyle,
          ...style
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

VisuallyHidden.displayName = "VisuallyHidden";
