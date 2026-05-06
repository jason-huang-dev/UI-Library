import { View } from "react-native";
import { PlayingCard } from "../PlayingCard";
import { cardHandStyles } from "./CardHand.styles";
import type { CardHandProps } from "./CardHand.types";

export function CardHand({
  cards,
  compact = false,
  disabled = false,
  style,
  ...props
}: CardHandProps) {
  const overlap = compact ? -54 : -34;

  return (
    <View style={[cardHandStyles.hand, style]} {...props}>
      {cards.map((card, index) => (
        <PlayingCard
          disabled={disabled}
          faceDown={card.faceDown}
          key={card.id}
          rank={card.rank}
          selected={card.selected}
          style={{
            marginLeft: index === 0 ? 0 : overlap,
            transform: [
              { rotate: `${(index - (cards.length - 1) / 2) * 4}deg` },
              { translateY: card.selected ? -8 : Math.abs(index - (cards.length - 1) / 2) * 3 }
            ]
          }}
          suit={card.suit}
        />
      ))}
    </View>
  );
}
