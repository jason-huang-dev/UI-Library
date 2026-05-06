import { StyleSheet } from "react-native";

export const radioGroupStyles = StyleSheet.create({
  base: {
    gap: 10
  },
  disabled: {
    opacity: 0.48
  },
  inner: {
    borderRadius: 5,
    height: 10,
    width: 10
  },
  outer: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    height: 20,
    justifyContent: "center",
    width: 20
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  }
});
