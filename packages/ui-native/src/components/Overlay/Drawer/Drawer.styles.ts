import { StyleSheet } from "react-native";

export const drawerStyles = StyleSheet.create({
  backdrop: {
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.25)",
    flex: 1
  },
  body: {
    flex: 1
  },
  panel: {
    borderRadius: 0,
    gap: 12,
    height: "100%",
    width: 360
  }
});
