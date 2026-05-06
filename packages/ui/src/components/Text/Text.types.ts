import type { ElementType, ReactNode } from "react";
import type { TypographyProps } from "@mui/material/Typography";

export type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "bodySm"
  | "label"
  | "caption"
  | "overline"
  | "code";

export type TextProps = Omit<TypographyProps, "children" | "color" | "variant"> & {
  as?: ElementType;
  children: ReactNode;
  color?: "primary" | "secondary" | "disabled";
  muted?: boolean;
  variant?: TextVariant;
};
