import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    minHeight: 44,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  disabled: {
    opacity: 0.48
  },
  pressed: {
    opacity: 0.84
  }
});
