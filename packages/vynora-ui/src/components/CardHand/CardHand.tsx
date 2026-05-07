import { View } from "react-native";
import { PlayingCard } from "../PlayingCard";
import { cardHandStyles } from "./CardHand.styles";
import type { CardHandProps } from "./CardHand.types";

export function CardHand({
  cards,
  compact = false,
  disabled = false,
  layout = "linear",
  style,
  ...props
}: CardHandProps) {
  const overlap = compact ? -54 : -34;
  const gap = compact ? 8 : 12;
  const mode = compact ? "compact" : "full";

  return (
    <View style={[cardHandStyles.hand, style]} {...props}>
      {cards.map((card, index) => {
        const fanOffset = Math.abs(index - (cards.length - 1) / 2) * 3;
        const isFan = layout === "fan";

        return (
          <PlayingCard
            disabled={disabled}
            faceDown={card.faceDown}
            foil={card.foil}
            frame={card.frame}
            glow={card.glow}
            invalid={card.invalid}
            key={card.id}
            mode={mode}
            playable={card.playable}
            rank={card.rank}
            selected={card.selected}
            style={{
              marginLeft: index === 0 ? 0 : isFan ? overlap : gap,
              transform: [
                { rotate: isFan ? `${(index - (cards.length - 1) / 2) * 4}deg` : "0deg" },
                { translateY: card.selected ? -8 : isFan ? fanOffset : 0 }
              ]
            }}
            suit={card.suit}
          />
        );
      })}
    </View>
  );
}
