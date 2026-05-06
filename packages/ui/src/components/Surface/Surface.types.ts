import type { ReactNode } from "react";
import type { PaperProps } from "@mui/material/Paper";

export type SurfaceProps = Omit<PaperProps, "children"> & {
  children: ReactNode;
  muted?: boolean;
  padding?: number | string;
};
