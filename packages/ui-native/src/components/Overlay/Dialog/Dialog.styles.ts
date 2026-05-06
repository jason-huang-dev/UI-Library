import { StyleSheet } from "react-native";

export const dialogStyles = StyleSheet.create({
  actions: {
    alignItems: "flex-end",
    marginTop: 8
  },
  backdrop: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  panel: {
    gap: 12,
    maxWidth: 420,
    width: "100%"
  }
});
