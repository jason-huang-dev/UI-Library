import { View, type DimensionValue } from "react-native";
import { nativeThemes } from "../../../theme";
import { progressBarStyles } from "./ProgressBar.styles";
import type { ProgressBarProps } from "./ProgressBar.types";

export function ProgressBar({ style, value = 0, ...props }: ProgressBarProps) {
  const theme = nativeThemes.light;
  const width = `${Math.max(0, Math.min(100, value))}%` as DimensionValue;

  return (
    <View style={[progressBarStyles.track, { backgroundColor: theme.color.border }, style]} {...props}>
      <View style={[progressBarStyles.fill, { backgroundColor: theme.color.primary, width }]} />
    </View>
  );
}
