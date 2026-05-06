import { View } from "react-native";
import { Text } from "../Text";
import { iconStyles } from "./Icon.styles";
import type { IconProps } from "./Icon.types";

export function Icon({ children, label, size = 24, style, ...props }: IconProps) {
  return (
    <View
      accessibilityLabel={label}
      accessibilityRole={label ? "image" : "none"}
      style={[iconStyles.base, { height: size, width: size }, style]}
      {...props}
    >
      {children ?? <Text muted variant="caption">•</Text>}
    </View>
  );
}
