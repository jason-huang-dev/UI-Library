import { StyleSheet } from "react-native";
import { vynoraTheme } from "../../theme";

export const actionBarStyles = StyleSheet.create({
  bar: {
    alignItems: "center",
    backgroundColor: "rgba(17, 24, 39, 0.9)",
    borderColor: vynoraTheme.color.panelBorder,
    borderRadius: vynoraTheme.radius.lg,
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: vynoraTheme.spacing.md
  },
  button: {
    alignItems: "center",
    borderRadius: vynoraTheme.radius.md,
    minHeight: 42,
    minWidth: 92,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  buttonDanger: {
    backgroundColor: vynoraTheme.color.danger
  },
  buttonDisabled: {
    opacity: 0.42
  },
  buttonNeutral: {
    backgroundColor: vynoraTheme.color.panelRaised,
    borderColor: vynoraTheme.color.panelBorder,
    borderWidth: 1
  },
  buttonPressed: {
    opacity: 0.82,
    transform: [{ translateY: 1 }]
  },
  buttonPrimary: {
    backgroundColor: vynoraTheme.color.action
  },
  label: {
    color: vynoraTheme.color.text,
    fontSize: 14,
    fontWeight: "800"
  },
  labelPrimary: {
    color: "#1D1B1B"
  }
});
