import type { ViewProps } from "react-native";
import type { CardRank, CardSuit } from "../PlayingCard";

export type HandCard = {
  id: string;
  faceDown?: boolean;
  rank: CardRank;
  selected?: boolean;
  suit: CardSuit;
};

export type CardHandProps = ViewProps & {
  cards: HandCard[];
  compact?: boolean;
  disabled?: boolean;
};
