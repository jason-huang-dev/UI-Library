import { StyleSheet } from "react-native";

export const visuallyHiddenStyles = StyleSheet.create({
  hidden: {
    height: 1,
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    width: 1
  }
});
