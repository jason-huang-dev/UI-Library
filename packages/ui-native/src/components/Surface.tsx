import type { ReactNode } from "react";
import {
  StyleSheet,
  View,
  type ViewProps
} from "react-native";
import { nativeThemes } from "../theme";

export type SurfaceProps = ViewProps & {
  children: ReactNode;
  muted?: boolean;
};

export function Surface({
  children,
  muted = false,
  style,
  ...props
}: SurfaceProps) {
  const theme = nativeThemes.light;

  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor: muted
            ? theme.color.background
            : theme.color.surface,
          borderColor: theme.color.border
        },
        style
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16
  }
});
