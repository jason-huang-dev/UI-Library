import type { ReactNode } from "react";
import type { ViewProps } from "react-native";
import type {
  CardCosmetic,
  CardDisplayMode,
  CardRank,
  CardSuit
} from "../../types/card";

export type { CardRank, CardSuit };

export type PlayingCardProps = ViewProps & CardCosmetic & {
  children?: ReactNode;
  disabled?: boolean;
  faceDown?: boolean;
  invalid?: boolean;
  mode?: CardDisplayMode;
  playable?: boolean;
  rank?: CardRank;
  selected?: boolean;
  suit?: CardSuit;
};
