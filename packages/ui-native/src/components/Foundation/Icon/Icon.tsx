import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { Text } from "../Text";

export type IconProps = ViewProps & {
  children?: ReactNode;
  label?: string;
  size?: number;
};

export function Icon({ children, label, size = 24, style, ...props }: IconProps) {
  return (
    <View
      accessibilityLabel={label}
      accessibilityRole={label ? "image" : "none"}
      style={[styles.base, { height: size, width: size }, style]}
      {...props}
    >
      {children ?? <Text muted variant="caption">•</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center"
  }
});
