import { StyleSheet, View, type DimensionValue, type ViewProps } from "react-native";
import { nativeThemes } from "../../../theme";

export type SkeletonProps = ViewProps & {
  height?: number;
  width?: DimensionValue;
};

export function Skeleton({ height = 20, style, width = "100%", ...props }: SkeletonProps) {
  const theme = nativeThemes.light;

  return (
    <View
      style={[styles.base, { backgroundColor: theme.color.border, height, width }, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    opacity: 0.65
  }
});
