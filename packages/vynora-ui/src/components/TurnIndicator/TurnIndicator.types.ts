import type { ViewProps } from "react-native";

export type TurnIndicatorProps = ViewProps & {
  active?: boolean;
  label?: string;
  secondsRemaining?: number;
};
