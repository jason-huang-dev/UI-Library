import type { ReactNode } from "react";
import type { ViewProps } from "react-native";
import type { PetMood } from "../PetAvatar";

export type PlayerSeatProps = ViewProps & {
  active?: boolean;
  cardCount?: number;
  children?: ReactNode;
  chips?: number | string;
  name: string;
  petMood?: PetMood;
};
