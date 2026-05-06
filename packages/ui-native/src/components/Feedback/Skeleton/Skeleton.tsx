import { View } from "react-native";
import { nativeThemes } from "../../../theme";
import { skeletonStyles } from "./Skeleton.styles";
import type { SkeletonProps } from "./Skeleton.types";

export function Skeleton({ height = 20, style, width = "100%", ...props }: SkeletonProps) {
  const theme = nativeThemes.light;

  return (
    <View
      style={[skeletonStyles.base, { backgroundColor: theme.color.border, height, width }, style]}
      {...props}
    />
  );
}
