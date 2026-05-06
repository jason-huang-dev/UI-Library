import { StyleSheet, View, type ViewProps } from "react-native";
import { nativeThemes } from "../../../theme";

export type DividerProps = ViewProps & {
  orientation?: "horizontal" | "vertical";
};

export function Divider({ orientation = "horizontal", style, ...props }: DividerProps) {
  const theme = nativeThemes.light;

  return (
    <View
      accessibilityRole="none"
      style={[
        orientation === "horizontal" ? styles.horizontal : styles.vertical,
        { backgroundColor: theme.color.border },
        style
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  horizontal: {
    height: StyleSheet.hairlineWidth,
    width: "100%"
  },
  vertical: {
    alignSelf: "stretch",
    width: StyleSheet.hairlineWidth
  }
});
