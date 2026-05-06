import type { ViewProps } from "react-native";

export type CardBackProps = ViewProps & {
  disabled?: boolean;
  selected?: boolean;
};
