import { forwardRef } from "react";
import { EmptyState } from "../EmptyState";
import { Icon } from "../../Foundation/Icon";
import type { ErrorStateProps } from "./ErrorState.types";

const errorPath = (
  <path d="M11.25 4.25h1.5v9h-1.5v-9Zm0 11h1.5v1.5h-1.5v-1.5ZM12 2 2.75 19h18.5L12 2Zm0 3.1L18.72 17H5.28L12 5.1Z" />
);

export const ErrorState = forwardRef<HTMLDivElement, ErrorStateProps>(
  function ErrorState(
    {
      description = "Something went wrong. Try again or contact support if the issue continues.",
      icon,
      title = "Unable to load this view",
      ...props
    },
    ref
  ) {
    return (
      <EmptyState
        ref={ref}
        description={description}
        icon={
          icon ?? (
            <Icon color="error" fontSize="large" title="Error">
              {errorPath}
            </Icon>
          )
        }
        title={title}
        {...props}
      />
    );
  }
);

ErrorState.displayName = "ErrorState";
