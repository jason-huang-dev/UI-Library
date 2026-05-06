import { StyleSheet, View, type DimensionValue, type ViewProps } from "react-native";
import { nativeThemes } from "../../../theme";

export type ProgressBarProps = ViewProps & {
  value?: number;
};

export function ProgressBar({ style, value = 0, ...props }: ProgressBarProps) {
  const theme = nativeThemes.light;
  const width = `${Math.max(0, Math.min(100, value))}%` as DimensionValue;

  return (
    <View style={[styles.track, { backgroundColor: theme.color.border }, style]} {...props}>
      <View style={[styles.fill, { backgroundColor: theme.color.primary, width }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    borderRadius: 999,
    height: "100%"
  },
  track: {
    borderRadius: 999,
    height: 6,
    overflow: "hidden"
  }
});
