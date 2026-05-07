import { StyleSheet, type ViewStyle } from "react-native";
import { cardTheme } from "../../theme";
import type { CardDisplayMode } from "../../types/card";

export function getCardBackContainerStyle(
  mode: Exclude<CardDisplayMode, "faceDown">
): ViewStyle {
  const dimensions = cardTheme.size[mode];

  return {
    borderRadius: cardTheme.radius[mode],
    height: dimensions.height,
    width: dimensions.width
  };
}

export const cardBackStyles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "transparent",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.24)",
    justifyContent: "center",
    overflow: "hidden"
  },
  disabled: {
    opacity: 0.48
  },
  glow: {
    boxShadow: "0px 0px 22px rgba(214, 176, 94, 0.42)"
  },
  selected: {
    transform: [{ translateY: -8 }]
  }
});
