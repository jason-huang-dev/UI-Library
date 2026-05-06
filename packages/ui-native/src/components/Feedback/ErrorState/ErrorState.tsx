import { EmptyState } from "../EmptyState";
import type { ErrorStateProps } from "./ErrorState.types";

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
