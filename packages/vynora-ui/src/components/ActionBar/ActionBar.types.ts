import type { PressableProps, ViewProps } from "react-native";

export type GameAction = {
  disabled?: boolean;
  id: string;
  label: string;
  tone?: "primary" | "danger" | "neutral";
};

export type ActionBarProps = ViewProps & {
  actions: GameAction[];
  onActionPress?: (action: GameAction) => void;
};

export type ActionButtonProps = PressableProps & {
  action: GameAction;
};
