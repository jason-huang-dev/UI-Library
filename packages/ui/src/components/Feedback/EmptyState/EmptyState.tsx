import Stack from "@mui/material/Stack";
import { forwardRef } from "react";
import { Surface } from "../../Foundation/Surface";
import { Text } from "../../Foundation/Text";
import type { EmptyStateProps } from "./EmptyState.types";

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  function EmptyState(
    {
      action,
      description,
      icon,
      padding = 4,
      title,
      ...props
    },
    ref
  ) {
    return (
      <Surface ref={ref} muted padding={padding} {...props}>
        <Stack alignItems="center" spacing={1.5} sx={{ py: 2, textAlign: "center" }}>
          {icon ? (
            <span aria-hidden="true" style={{ display: "inline-flex" }}>
              {icon}
            </span>
          ) : null}
          <Stack spacing={0.5}>
            <Text as="h2" variant="h4">
              {title}
            </Text>
            {description ? (
              <Text muted sx={{ maxWidth: 480 }}>
                {description}
              </Text>
            ) : null}
          </Stack>
          {action ? <div>{action}</div> : null}
        </Stack>
      </Surface>
    );
  }
);

EmptyState.displayName = "EmptyState";
