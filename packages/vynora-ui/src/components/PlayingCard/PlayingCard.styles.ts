import { StyleSheet } from "react-native";
import { vynoraTheme } from "../../theme";

export const playingCardStyles = StyleSheet.create({
  card: {
    alignItems: "stretch",
    aspectRatio: 0.714,
    backgroundColor: vynoraTheme.color.card,
    borderColor: "rgba(29, 27, 27, 0.14)",
    borderRadius: vynoraTheme.radius.md,
    borderWidth: 1,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.22)",
    justifyContent: "space-between",
    minHeight: 132,
    padding: vynoraTheme.spacing.sm,
    width: 94
  },
  cornerBottom: {
    alignItems: "center",
    transform: [{ rotate: "180deg" }]
  },
  cornerText: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 20
  },
  disabled: {
    opacity: 0.48
  },
  selected: {
    borderColor: vynoraTheme.color.action,
    borderWidth: 2,
    transform: [{ translateY: -8 }]
  },
  suitCenter: {
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "800"
  }
});
