import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export type GameTableProps = ViewProps & {
  actionBar?: ReactNode;
  children?: ReactNode;
  playerSeats?: ReactNode;
  status?: ReactNode;
};
