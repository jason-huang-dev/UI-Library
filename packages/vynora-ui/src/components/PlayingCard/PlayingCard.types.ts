import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type CardSuit = "spades" | "hearts" | "diamonds" | "clubs";

export type CardRank =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export type PlayingCardProps = ViewProps & {
  children?: ReactNode;
  disabled?: boolean;
  faceDown?: boolean;
  rank?: CardRank;
  selected?: boolean;
  suit?: CardSuit;
};
