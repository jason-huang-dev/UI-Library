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

export type CardDisplayMode =
  | "full"
  | "compact"
  | "mini"
  | "opponent"
  | "faceDown";

export type CardFrame = "default" | "rare" | "legendary";

export type CardBackVariant = "classic" | "premium" | "pet";

export type CardVisualState = "default" | "selected" | "disabled" | "playable" | "invalid";

export type CardCosmetic = {
  animated?: boolean;
  foil?: boolean;
  frame?: CardFrame;
  glow?: boolean;
};
