import { View } from "react-native";
import { nativeThemes } from "../../../theme";
import { dividerStyles } from "./Divider.styles";
import type { DividerProps } from "./Divider.types";

export function Divider({ orientation = "horizontal", style, ...props }: DividerProps) {
  const theme = nativeThemes.light;

  return (
    <View
      accessibilityRole="none"
      style={[
        orientation === "horizontal" ? dividerStyles.horizontal : dividerStyles.vertical,
        { backgroundColor: theme.color.border },
        style
      ]}
      {...props}
    />
  );
}
