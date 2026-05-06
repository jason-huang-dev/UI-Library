import { Text, View } from "react-native";
import { CardBack } from "../CardBack";
import { playingCardStyles } from "./PlayingCard.styles";
import type { CardSuit, PlayingCardProps } from "./PlayingCard.types";

const suitGlyph: Record<CardSuit, string> = {
  spades: "♠",
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣"
};

function getSuitColor(suit: CardSuit) {
  return suit === "hearts" || suit === "diamonds" ? "#C93434" : "#1D1B1B";
}

export function PlayingCard({
  disabled = false,
  faceDown = false,
  rank = "A",
  selected = false,
  style,
  suit = "spades",
  ...props
}: PlayingCardProps) {
  if (faceDown) {
    return <CardBack disabled={disabled} selected={selected} style={style} {...props} />;
  }

  const glyph = suitGlyph[suit];
  const color = getSuitColor(suit);

  return (
    <View
      accessibilityLabel={`${rank} of ${suit}`}
      style={[
        playingCardStyles.card,
        selected && playingCardStyles.selected,
        disabled && playingCardStyles.disabled,
        style
      ]}
      {...props}
    >
      <View>
        <Text style={[playingCardStyles.cornerText, { color }]}>{rank}</Text>
        <Text style={[playingCardStyles.cornerText, { color }]}>{glyph}</Text>
      </View>

      <Text style={[playingCardStyles.suitCenter, { color }]}>{glyph}</Text>

      <View style={playingCardStyles.cornerBottom}>
        <Text style={[playingCardStyles.cornerText, { color }]}>{rank}</Text>
        <Text style={[playingCardStyles.cornerText, { color }]}>{glyph}</Text>
      </View>
    </View>
  );
}
