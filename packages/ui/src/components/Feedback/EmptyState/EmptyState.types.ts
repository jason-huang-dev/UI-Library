import type { ReactNode } from "react";
import type { SurfaceProps } from "../../Foundation/Surface";

export type EmptyStateProps = Omit<SurfaceProps, "children" | "title"> & {
  action?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  title: ReactNode;
};
