import type { ReactNode } from "react";

export type TooltipProps = {
  children: ReactNode;
  title: ReactNode;
};

export function Tooltip({ children }: TooltipProps) {
  return children;
}
