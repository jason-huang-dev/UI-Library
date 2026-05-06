import { Text, View } from "react-native";
import { PetAvatar } from "../PetAvatar";
import { playerSeatStyles } from "./PlayerSeat.styles";
import type { PlayerSeatProps } from "./PlayerSeat.types";

export function PlayerSeat({
  active = false,
  cardCount = 0,
  children,
  chips,
  name,
  petMood = active ? "focused" : "calm",
  style,
  ...props
}: PlayerSeatProps) {
  return (
    <View
      accessibilityLabel={`${name} player seat`}
      style={[playerSeatStyles.root, active && playerSeatStyles.active, style]}
      {...props}
    >
      <PetAvatar mood={petMood} name="" size="small" />
      <View style={playerSeatStyles.body}>
        <Text style={playerSeatStyles.name}>{name}</Text>
        <Text style={playerSeatStyles.cardCount}>{cardCount} cards</Text>
        {chips !== undefined ? <Text style={playerSeatStyles.chips}>{chips}</Text> : null}
        {children}
      </View>
    </View>
  );
}
