import { StyleSheet } from "react-native";

export const alertSeverityColors = {
  error: "#FEE4E2",
  info: "#E0F2FE",
  success: "#DCFCE7",
  warning: "#FEF3C7"
};

export const alertStyles = StyleSheet.create({
  base: {
    borderRadius: 8,
    gap: 4,
    padding: 12
  }
});
