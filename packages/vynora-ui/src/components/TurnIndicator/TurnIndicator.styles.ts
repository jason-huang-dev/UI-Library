import { StyleSheet } from "react-native";
import { vynoraTheme } from "../../theme";

export const turnIndicatorStyles = StyleSheet.create({
  active: {
    backgroundColor: "rgba(61, 220, 151, 0.14)",
    borderColor: vynoraTheme.color.tableHighlight
  },
  dot: {
    backgroundColor: vynoraTheme.color.textMuted,
    borderRadius: 5,
    height: 10,
    width: 10
  },
  dotActive: {
    backgroundColor: vynoraTheme.color.tableHighlight,
    boxShadow: "0px 0px 14px rgba(61, 220, 151, 0.8)"
  },
  label: {
    color: vynoraTheme.color.text,
    fontSize: 13,
    fontWeight: "800"
  },
  root: {
    alignItems: "center",
    backgroundColor: "rgba(17, 24, 39, 0.82)",
    borderColor: vynoraTheme.color.panelBorder,
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  time: {
    color: vynoraTheme.color.textMuted,
    fontSize: 12,
    fontWeight: "700"
  }
});
