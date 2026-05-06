import { View } from "react-native";
import { gameTableStyles } from "./GameTable.styles";
import type { GameTableProps } from "./GameTable.types";

export function GameTable({
  actionBar,
  children,
  playerSeats,
  status,
  style,
  ...props
}: GameTableProps) {
  return (
    <View style={[gameTableStyles.root, style]} {...props}>
      <View style={gameTableStyles.rail}>
        <View style={gameTableStyles.felt}>{children}</View>
      </View>
      {playerSeats ? <View style={gameTableStyles.seats}>{playerSeats}</View> : null}
      {status ? <View style={gameTableStyles.status}>{status}</View> : null}
      {actionBar ? <View style={gameTableStyles.actionBar}>{actionBar}</View> : null}
    </View>
  );
}
