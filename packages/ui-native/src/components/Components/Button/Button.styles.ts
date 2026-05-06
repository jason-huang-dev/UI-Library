import { StyleSheet, type TextStyle, type ViewStyle } from "react-native";
import { nativeThemes } from "../../../theme";
import type { ButtonColor, ButtonSize, ButtonVariant } from "./Button.types";

type NormalizedButtonVariant = "contained" | "outlined" | "text";

type ButtonStyleOptions = {
  color: ButtonColor;
  customColor?: string;
  customHoverColor?: string;
  customTextColor?: string;
  disabled: boolean;
  hovered: boolean;
  pressed: boolean;
  size: ButtonSize;
  variant: ButtonVariant;
};

const theme = nativeThemes.light;

const lightActionColors: Record<ButtonColor, string> = {
  primary: theme.color.text,
  secondary: theme.color.secondaryActive,
  success: "#1F7A4D",
  warning: "#7F5B22",
  error: "#B42318",
  info: theme.color.secondaryActive
};

const containedColors: Record<
  ButtonColor,
  { active: string; background: string; hover: string; text: string }
> = {
  primary: {
    background: theme.color.primary,
    hover: theme.color.primaryHover,
    active: theme.color.primaryActive,
    text: theme.color.primaryText
  },
  secondary: {
    background: theme.color.secondary,
    hover: theme.color.secondaryHover,
    active: theme.color.secondaryActive,
    text: theme.color.secondaryText
  },
  success: {
    background: theme.color.success,
    hover: theme.color.success,
    active: theme.color.success,
    text: theme.color.text
  },
  warning: {
    background: theme.color.warning,
    hover: theme.color.warning,
    active: theme.color.warning,
    text: theme.color.text
  },
  error: {
    background: theme.color.danger,
    hover: theme.color.danger,
    active: theme.color.danger,
    text: theme.color.text
  },
  info: {
    background: theme.color.info,
    hover: theme.color.info,
    active: theme.color.info,
    text: theme.color.text
  }
};

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  small: {
    minHeight: 34,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  medium: {
    minHeight: 44,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  large: {
    minHeight: 52,
    paddingHorizontal: 20,
    paddingVertical: 13
  }
};

const textSizeStyles: Record<ButtonSize, TextStyle> = {
  small: {
    fontSize: 13,
    lineHeight: 18
  },
  medium: {
    fontSize: 14,
    lineHeight: 20
  },
  large: {
    fontSize: 15,
    lineHeight: 22
  }
};

function addAlpha(hexColor: string, alphaHex: string) {
  return hexColor.startsWith("#") && hexColor.length === 7
    ? `${hexColor}${alphaHex}`
    : hexColor;
}

export function normalizeButtonVariant(
  variant: ButtonVariant
): NormalizedButtonVariant {
  if (variant === "primary") {
    return "contained";
  }

  if (variant === "secondary") {
    return "outlined";
  }

  return variant;
}

export function getButtonContainerStyle({
  color,
  customColor,
  customHoverColor,
  disabled,
  hovered,
  pressed,
  size,
  variant
}: ButtonStyleOptions): ViewStyle {
  const normalizedVariant = normalizeButtonVariant(variant);
  const isInteractive = !disabled;
  const customInteractiveColor = customHoverColor || customColor;
  const baseColor = customColor || lightActionColors[color];
  const containedColor = containedColors[color];
  const hoverColor = customInteractiveColor || containedColor.hover;
  const activeColor = customInteractiveColor || containedColor.active;

  const variantStyle: ViewStyle = {};

  if (normalizedVariant === "contained") {
    variantStyle.backgroundColor = pressed && isInteractive
      ? activeColor
      : hovered && isInteractive
        ? hoverColor
        : customColor || containedColor.background;
    variantStyle.borderColor = variantStyle.backgroundColor;

    if (hovered && isInteractive && !pressed && (color === "primary" || color === "secondary")) {
      variantStyle.boxShadow = `0px 8px 24px ${addAlpha(
        customColor || containedColor.background,
        "47"
      )}`;
      variantStyle.elevation = 3;
    }
  }

  if (normalizedVariant === "outlined") {
    variantStyle.backgroundColor = (pressed || hovered) && isInteractive
      ? addAlpha(baseColor, "14")
      : "transparent";
    variantStyle.borderColor = (pressed || hovered) && isInteractive
      ? customInteractiveColor || baseColor
      : baseColor;
    variantStyle.borderWidth = 1.5;
  }

  if (normalizedVariant === "text") {
    variantStyle.backgroundColor = (pressed || hovered) && isInteractive
      ? addAlpha(baseColor, "14")
      : "transparent";
  }

  return {
    ...sizeStyles[size],
    ...variantStyle
  };
}

export function getButtonTextStyle({
  color,
  customColor,
  customHoverColor,
  customTextColor,
  disabled,
  hovered,
  pressed,
  size,
  variant
}: ButtonStyleOptions): TextStyle {
  const normalizedVariant = normalizeButtonVariant(variant);
  const isInteractive = !disabled;
  const customInteractiveColor = customHoverColor || customColor;
  const baseColor = customColor || lightActionColors[color];
  const containedColor = containedColors[color];
  let textColor = normalizedVariant === "contained"
    ? customColor
      ? customTextColor || "#FFFFFF"
      : containedColor.text
    : baseColor;

  if ((pressed || hovered) && isInteractive && normalizedVariant !== "contained") {
    textColor = customInteractiveColor || baseColor;
  }

  return {
    ...textSizeStyles[size],
    color: textColor
  };
}

export const buttonStyles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center"
  },
  disabled: {
    boxShadow: "none",
    elevation: 0,
    opacity: 0.48,
    transform: [{ translateY: 0 }]
  },
  pressed: {
    transform: [{ translateY: 1 }]
  }
});
