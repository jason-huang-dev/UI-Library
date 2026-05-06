import type { DimensionValue, ViewProps } from "react-native";

export type SkeletonProps = ViewProps & {
  height?: number;
  width?: DimensionValue;
};
