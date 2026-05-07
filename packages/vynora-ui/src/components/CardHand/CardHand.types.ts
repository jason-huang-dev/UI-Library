import type { ViewProps } from "react-native";
import type { CardCosmetic, CardRank, CardSuit } from "../../types/card";

export type HandCard = CardCosmetic & {
  id: string;
  faceDown?: boolean;
  invalid?: boolean;
  playable?: boolean;
  rank: CardRank;
  selected?: boolean;
  suit: CardSuit;
};

export type CardHandProps = ViewProps & {
  cards: HandCard[];
  compact?: boolean;
  disabled?: boolean;
};
