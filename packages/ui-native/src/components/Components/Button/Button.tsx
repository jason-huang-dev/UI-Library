import { Pressable, StyleSheet, type ViewStyle } from "react-native";
import { nativeThemes } from "../../../theme";
import { Text } from "../../Foundation/Text";
import { buttonStyles } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

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
    ? { backgroundColor: theme.color.primary }
    : {
        backgroundColor: theme.color.surface,
        borderColor: theme.color.border,
        borderWidth: StyleSheet.hairlineWidth
      };

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={(state) => [
        buttonStyles.base,
        variantStyle,
        disabled && buttonStyles.disabled,
        state.pressed && !disabled && buttonStyles.pressed,
        typeof style === "function" ? style(state) : style
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
