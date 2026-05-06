import { Text, View } from "react-native";
import { turnIndicatorStyles } from "./TurnIndicator.styles";
import type { TurnIndicatorProps } from "./TurnIndicator.types";

export function TurnIndicator({
  active = false,
  label = active ? "Your turn" : "Waiting",
  secondsRemaining,
  style,
  ...props
}: TurnIndicatorProps) {
  return (
    <View
      accessibilityLabel={label}
      style={[turnIndicatorStyles.root, active && turnIndicatorStyles.active, style]}
      {...props}
    >
      <View style={[turnIndicatorStyles.dot, active && turnIndicatorStyles.dotActive]} />
      <Text style={turnIndicatorStyles.label}>{label}</Text>
      {typeof secondsRemaining === "number" ? (
        <Text style={turnIndicatorStyles.time}>{secondsRemaining}s</Text>
      ) : null}
    </View>
  );
}
