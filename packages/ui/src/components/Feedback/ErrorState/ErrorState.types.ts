import type { ReactNode } from "react";
import type { EmptyStateProps } from "../EmptyState";

export type ErrorStateProps = Omit<EmptyStateProps, "title"> & {
  title?: ReactNode;
};
