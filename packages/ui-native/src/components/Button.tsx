import type { ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  type PressableProps,
  type ViewStyle
} from "react-native";
import { nativeThemes } from "../theme";
import { Text } from "./Text";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = Omit<PressableProps, "children"> & {
  children?: ReactNode;
  label?: ReactNode;
  variant?: ButtonVariant;
};

export function Button({
  children,
  disabled = false,
  label,
  style,
  variant = "primary",
  ...props
}: ButtonProps) {
  const theme = nativeThemes.light;
  const variantStyle: ViewStyle = variant === "primary"
    ? {
        backgroundColor: theme.color.primary
      }
    : {
        backgroundColor: theme.color.surface,
        borderColor: theme.color.border,
        borderWidth: StyleSheet.hairlineWidth
      };

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variantStyle,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        typeof style === "function" ? style({ pressed }) : style
      ]}
      {...props}
    >
      <Text
        style={{
          color: variant === "primary"
            ? theme.color.primaryText
            : theme.color.text
        }}
        variant="label"
      >
        {children ?? label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    minHeight: 44,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  disabled: {
    opacity: 0.48
  },
  pressed: {
    opacity: 0.84
  }
});
