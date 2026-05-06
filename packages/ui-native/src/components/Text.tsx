import type { ReactNode } from "react";
import {
  Text as RNText,
  StyleSheet,
  type TextProps as RNTextProps
} from "react-native";
import { nativeThemes } from "../theme";

export type NativeTextVariant = "title" | "body" | "caption" | "label";

export type TextProps = RNTextProps & {
  children: ReactNode;
  muted?: boolean;
  variant?: NativeTextVariant;
};

export function Text({
  children,
  muted = false,
  style,
  variant = "body",
  ...props
}: TextProps) {
  const theme = nativeThemes.light;

  return (
    <RNText
      style={[
        styles.base,
        styles[variant],
        { color: muted ? theme.color.textMuted : theme.color.text },
        style
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: "System"
  },
  body: {
    fontSize: 16,
    lineHeight: 24
  },
  caption: {
    fontSize: 12,
    lineHeight: 18
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32
  }
});
