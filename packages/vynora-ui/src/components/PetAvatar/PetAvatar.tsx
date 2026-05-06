import { Text, View } from "react-native";
import { petAvatarStyles } from "./PetAvatar.styles";
import type { PetAvatarProps, PetMood } from "./PetAvatar.types";

const moodEmoji: Record<PetMood, string> = {
  calm: "🐾",
  focused: "🦊",
  happy: "✨",
  sleepy: "☾"
};

const sizeMap = {
  small: 40,
  medium: 56,
  large: 72
} as const;

export function PetAvatar({
  mood = "focused",
  name,
  size = "medium",
  style,
  ...props
}: PetAvatarProps) {
  const dimension = sizeMap[size];

  return (
    <View style={[petAvatarStyles.root, style]} {...props}>
      <View
        style={[
          petAvatarStyles.avatar,
          {
            borderRadius: dimension / 2,
            height: dimension,
            width: dimension
          }
        ]}
      >
        <Text
          accessibilityLabel={`${mood} pet avatar`}
          style={[petAvatarStyles.emoji, { fontSize: dimension * 0.48 }]}
        >
          {moodEmoji[mood]}
        </Text>
      </View>
      {name ? <Text style={petAvatarStyles.label}>{name}</Text> : null}
    </View>
  );
}
