import { StyleSheet } from "react-native";
import { vynoraTheme } from "../../theme";

export const cardBackStyles = StyleSheet.create({
  card: {
    alignItems: "center",
    aspectRatio: 0.714,
    backgroundColor: vynoraTheme.color.cardBack,
    borderColor: vynoraTheme.color.cardBackAccent,
    borderRadius: vynoraTheme.radius.md,
    borderWidth: 2,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.24)",
    justifyContent: "center",
    minHeight: 132,
    overflow: "hidden",
    padding: vynoraTheme.spacing.md,
    width: 94
  },
  disabled: {
    opacity: 0.48
  },
  diamond: {
    borderColor: "rgba(214, 176, 94, 0.78)",
    borderRadius: vynoraTheme.radius.sm,
    borderWidth: 2,
    height: 44,
    transform: [{ rotate: "45deg" }],
    width: 44
  },
  inner: {
    alignItems: "center",
    borderColor: "rgba(255, 255, 255, 0.18)",
    borderRadius: vynoraTheme.radius.sm,
    borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    width: "100%"
  },
  selected: {
    borderColor: vynoraTheme.color.action,
    transform: [{ translateY: -8 }]
  }
});
