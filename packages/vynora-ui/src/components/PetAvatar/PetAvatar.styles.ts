import { StyleSheet } from "react-native";
import { vynoraTheme } from "../../theme";

export const petAvatarStyles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    backgroundColor: vynoraTheme.color.panelRaised,
    borderColor: vynoraTheme.color.panelBorder,
    borderWidth: 1,
    justifyContent: "center"
  },
  emoji: {
    lineHeight: 42
  },
  label: {
    color: vynoraTheme.color.text,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 4
  },
  root: {
    alignItems: "center"
  }
});
