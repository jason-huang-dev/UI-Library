import { StyleSheet } from "react-native";

export const checkboxStyles = StyleSheet.create({
  box: {
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    height: 20,
    width: 20
  },
  disabled: {
    opacity: 0.48
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  }
});
