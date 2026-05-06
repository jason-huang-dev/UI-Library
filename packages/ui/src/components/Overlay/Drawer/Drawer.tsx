import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { forwardRef } from "react";
import { Text } from "../../Foundation/Text";
import type { DrawerProps } from "./Drawer.types";

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer(
    {
      actions,
      anchor = "right",
      children,
      description,
      title,
      width = 360,
      ...props
    },
    ref
  ) {
    return (
      <MuiDrawer ref={ref} anchor={anchor} {...props}>
        <Box
          sx={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
            p: 3,
            width
          }}
        >
          {title || description ? (
            <Stack spacing={0.5} sx={{ mb: 2 }}>
              {title ? (
                <Text as="h2" variant="h4">
                  {title}
                </Text>
              ) : null}
              {description ? <Text muted>{description}</Text> : null}
            </Stack>
          ) : null}
          <Box sx={{ flex: 1 }}>{children}</Box>
          {actions ? (
            <Stack direction="row" justifyContent="flex-end" spacing={1.5} sx={{ mt: 3 }}>
              {actions}
            </Stack>
          ) : null}
        </Box>
      </MuiDrawer>
    );
  }
);

Drawer.displayName = "Drawer";
