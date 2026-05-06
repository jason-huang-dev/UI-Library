import MuiTypography from "@mui/material/Typography";
import { forwardRef } from "react";
import type { TextProps } from "./Text.types";

const variantElementMap = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  bodySm: "p",
  label: "span",
  caption: "span",
  overline: "span",
  code: "code"
} as const;

const variantSx = {
  display: {
    fontFamily: "serif",
    fontSize: "3.75rem",
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: "0.04em"
  },
  h1: {
    fontFamily: "serif",
    fontSize: "3rem",
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: "0.04em"
  },
  h2: {
    fontFamily: "serif",
    fontSize: "2.25rem",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "0.04em"
  },
  h3: {
    fontFamily: "serif",
    fontSize: "1.875rem",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "0.04em"
  },
  h4: {
    fontFamily: "serif",
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "0.04em"
  },
  body: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.65
  },
  bodySm: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.04em"
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.04em"
  },
  overline: {
    fontFamily: "serif",
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.16em",
    textTransform: "uppercase"
  },
  code: {
    fontFamily: "monospace",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5
  }
} as const;

export const Text = forwardRef<HTMLElement, TextProps>(
  function Text(
    {
      as,
      children,
      color = "primary",
      muted = false,
      variant = "body",
      sx,
      ...props
    },
    ref
  ) {
    const component = as ?? variantElementMap[variant];

    return (
      <MuiTypography
        ref={ref}
        component={component}
        sx={[
          variantSx[variant],
          {
            color: muted ? "text.secondary" : `text.${color}`
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : [])
        ]}
        {...props}
      >
        {children}
      </MuiTypography>
    );
  }
);

Text.displayName = "Text";
