import { StyleSheet } from "react-native";
import { vynoraTheme } from "../../theme";

export const playerSeatStyles = StyleSheet.create({
  active: {
    borderColor: vynoraTheme.color.tableHighlight,
    boxShadow: "0px 0px 18px rgba(61, 220, 151, 0.38)"
  },
  body: {
    flex: 1,
    gap: 4
  },
  cardCount: {
    color: vynoraTheme.color.textMuted,
    fontSize: 12,
    fontWeight: "700"
  },
  chips: {
    color: vynoraTheme.color.action,
    fontSize: 12,
    fontWeight: "800"
  },
  name: {
    color: vynoraTheme.color.text,
    fontSize: 14,
    fontWeight: "800"
  },
  root: {
    alignItems: "center",
    backgroundColor: "rgba(17, 24, 39, 0.9)",
    borderColor: vynoraTheme.color.panelBorder,
    borderRadius: vynoraTheme.radius.lg,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    minWidth: 196,
    padding: 12
  }
});
