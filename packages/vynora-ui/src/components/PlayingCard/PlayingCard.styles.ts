import { StyleSheet, type TextStyle, type ViewStyle } from "react-native";
import { cardTheme } from "../../theme";
import { vynoraTheme } from "../../theme";
import type { CardDisplayMode, CardSuit } from "../../types/card";

export function getCardDimensions(mode: CardDisplayMode) {
  if (mode === "faceDown") {
    return cardTheme.size.full;
  }

  return cardTheme.size[mode];
}

export function getCardRadius(mode: CardDisplayMode) {
  if (mode === "faceDown") {
    return cardTheme.radius.full;
  }

  return cardTheme.radius[mode];
}

export function getSuitColor(suit: CardSuit) {
  return suit === "hearts" || suit === "diamonds"
    ? cardTheme.suitColor.red
    : cardTheme.suitColor.black;
}

export function getCardContainerStyle(mode: CardDisplayMode): ViewStyle {
  const dimensions = getCardDimensions(mode);
  const radius = getCardRadius(mode);

  return {
    borderRadius: radius,
    height: dimensions.height,
    padding: Math.max(Math.round(dimensions.width * 0.085), 4),
    width: dimensions.width
  };
}

export function getCornerTextStyle(mode: CardDisplayMode): TextStyle {
  const dimensions = getCardDimensions(mode);
  const fontSize = Math.max(Math.round(dimensions.width * 0.19), 9);

  return {
    fontSize,
    lineHeight: Math.round(fontSize * 1.08)
  };
}

export function getCornerIconSize(mode: CardDisplayMode) {
  return Math.max(Math.round(getCardDimensions(mode).width * 0.16), 8);
}

export function getCenterIconSize(mode: CardDisplayMode) {
  return Math.max(Math.round(getCardDimensions(mode).width * 0.42), 18);
}

export const playingCardStyles = StyleSheet.create({
  card: {
    alignItems: "stretch",
    backgroundColor: vynoraTheme.color.card,
    borderColor: cardTheme.frameColor.default,
    borderWidth: cardTheme.borderWidth.default,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.22)",
    justifyContent: "space-between",
    overflow: "hidden"
  },
  compactCenter: {
    transform: [{ translateY: -2 }]
  },
  corner: {
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 1
  },
  cornerBottom: {
    alignSelf: "flex-end",
    transform: [{ rotate: "180deg" }]
  },
  cornerText: {
    fontWeight: "900",
    textAlign: "center"
  },
  disabled: {
    opacity: 0.48
  },
  glow: {
    boxShadow: "0px 0px 22px rgba(214, 176, 94, 0.44)"
  },
  invalid: {
    borderColor: cardTheme.stateColor.invalid,
    borderWidth: cardTheme.borderWidth.selected
  },
  mini: {
    justifyContent: "center"
  },
  playable: {
    borderColor: cardTheme.stateColor.playable,
    borderWidth: cardTheme.borderWidth.selected
  },
  selected: {
    borderColor: cardTheme.stateColor.selected,
    borderWidth: cardTheme.borderWidth.selected,
    transform: [{ translateY: -8 }]
  },
  suitCenter: {
    alignItems: "center",
    justifyContent: "center"
  }
});
