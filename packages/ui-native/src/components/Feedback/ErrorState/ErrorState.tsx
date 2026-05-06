import type { ReactNode } from "react";
import { EmptyState, type EmptyStateProps } from "../EmptyState";

export type ErrorStateProps = Omit<EmptyStateProps, "title"> & {
  title?: ReactNode;
};

export function ErrorState({
  description = "Something went wrong. Try again or contact support if the issue continues.",
  title = "Unable to load this view",
  ...props
}: ErrorStateProps) {
  return (
    <EmptyState
      description={description}
      title={title}
      {...props}
    />
  );
}
