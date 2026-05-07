import type { ViewProps } from "react-native";
import type { CardBackVariant, CardDisplayMode } from "../../types/card";

export type CardBackProps = ViewProps & {
  disabled?: boolean;
  glow?: boolean;
  mode?: Exclude<CardDisplayMode, "faceDown">;
  selected?: boolean;
  variant?: CardBackVariant;
};
