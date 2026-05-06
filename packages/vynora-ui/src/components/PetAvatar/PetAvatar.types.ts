import type { ViewProps } from "react-native";

export type PetMood = "calm" | "focused" | "happy" | "sleepy";

export type PetAvatarProps = ViewProps & {
  name?: string;
  mood?: PetMood;
  size?: "small" | "medium" | "large";
};
