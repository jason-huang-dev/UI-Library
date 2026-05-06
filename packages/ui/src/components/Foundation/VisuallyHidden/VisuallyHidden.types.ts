import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type VisuallyHiddenProps = Omit<ComponentPropsWithoutRef<"span">, "children"> & {
  children: ReactNode;
};
