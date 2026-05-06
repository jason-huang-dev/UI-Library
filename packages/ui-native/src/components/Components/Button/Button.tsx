import { useState } from "react";
import { Pressable } from "react-native";
import { Text } from "../../Foundation/Text";
import {
  buttonStyles,
  getButtonContainerStyle,
  getButtonTextStyle
} from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  color = "primary",
  customColor,
  customHoverColor,
  customTextColor,
  disabled = false,
  label,
  onHoverIn,
  onHoverOut,
  size = "medium",
  style,
  variant = "contained",
  ...props
}: ButtonProps) {
  const isDisabled = disabled === true;
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      disabled={isDisabled}
      onHoverIn={(event) => {
        setHovered(true);
        onHoverIn?.(event);
      }}
      onHoverOut={(event) => {
        setHovered(false);
        onHoverOut?.(event);
      }}
      style={(state) => [
        buttonStyles.base,
        getButtonContainerStyle({
          color,
          customColor,
          customHoverColor,
          customTextColor,
          disabled: isDisabled,
          hovered,
          pressed: state.pressed,
          size,
          variant
        }),
        isDisabled && buttonStyles.disabled,
        state.pressed && !isDisabled && buttonStyles.pressed,
        typeof style === "function" ? style(state) : style
      ]}
      {...props}
    >
      {(state) => (
        <Text
          style={getButtonTextStyle({
            color,
            customColor,
            customHoverColor,
            customTextColor,
            disabled: isDisabled,
            hovered,
            pressed: state.pressed,
            size,
            variant
          })}
          variant="label"
        >
          {children ?? label}
        </Text>
      )}
    </Pressable>
  );
}
