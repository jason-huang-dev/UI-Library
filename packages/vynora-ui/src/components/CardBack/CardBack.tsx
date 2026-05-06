import { View } from "react-native";
import { cardBackStyles } from "./CardBack.styles";
import type { CardBackProps } from "./CardBack.types";

export function CardBack({
  disabled = false,
  selected = false,
  style,
  ...props
}: CardBackProps) {
  return (
    <View
      accessibilityLabel="Face down playing card"
      style={[
        cardBackStyles.card,
        selected && cardBackStyles.selected,
        disabled && cardBackStyles.disabled,
        style
      ]}
      {...props}
    >
      <View style={cardBackStyles.inner}>
        <View style={cardBackStyles.diamond} />
      </View>
    </View>
  );
}
