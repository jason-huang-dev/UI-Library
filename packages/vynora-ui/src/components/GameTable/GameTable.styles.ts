import { StyleSheet } from "react-native";
import { vynoraTheme } from "../../theme";

export const gameTableStyles = StyleSheet.create({
  actionBar: {
    alignItems: "center",
    bottom: 18,
    left: 18,
    position: "absolute",
    right: 18
  },
  felt: {
    alignItems: "center",
    backgroundColor: vynoraTheme.color.tableFelt,
    borderColor: "rgba(255, 255, 255, 0.14)",
    borderRadius: 240,
    borderWidth: 1,
    boxShadow: "inset 0px 0px 80px rgba(0, 0, 0, 0.24)",
    justifyContent: "center",
    minHeight: 320,
    padding: 36,
    width: "100%"
  },
  rail: {
    backgroundColor: vynoraTheme.color.tableRail,
    borderRadius: 260,
    padding: 18,
    width: "100%"
  },
  root: {
    backgroundColor: vynoraTheme.color.table,
    borderRadius: vynoraTheme.radius.xl,
    minHeight: 520,
    overflow: "hidden",
    padding: 24
  },
  seats: {
    left: 18,
    position: "absolute",
    right: 18,
    top: 18
  },
  status: {
    alignItems: "center",
    bottom: 100,
    left: 18,
    position: "absolute",
    right: 18
  }
});
