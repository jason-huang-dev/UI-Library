import { View } from "react-native";
import { CardBackPattern } from "../../assets/cards/backs/CardBackPattern";
import { cardTheme } from "../../theme";
import { cardBackStyles, getCardBackContainerStyle } from "./CardBack.styles";
import type { CardBackProps } from "./CardBack.types";

export function CardBack({
  disabled = false,
  glow = false,
  mode = "full",
  selected = false,
  style,
  variant = "classic",
  ...props
}: CardBackProps) {
  const dimensions = cardTheme.size[mode];
  const radius = cardTheme.radius[mode];

  return (
    <View
      accessibilityLabel={`${variant} card back`}
      style={[
        cardBackStyles.card,
        getCardBackContainerStyle(mode),
        selected && cardBackStyles.selected,
        glow && cardBackStyles.glow,
        disabled && cardBackStyles.disabled,
        style
      ]}
      {...props}
    >
      <CardBackPattern
        height={dimensions.height}
        radius={radius}
        variant={variant}
        width={dimensions.width}
      />
    </View>
  );
}
