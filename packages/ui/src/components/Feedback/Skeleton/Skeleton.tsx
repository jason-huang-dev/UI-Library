import MuiSkeleton from "@mui/material/Skeleton";
import { forwardRef } from "react";
import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  function Skeleton(
    {
      animation = "wave",
      variant = "rounded",
      ...props
    },
    ref
  ) {
    return (
      <MuiSkeleton
        ref={ref}
        animation={animation}
        variant={variant}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
