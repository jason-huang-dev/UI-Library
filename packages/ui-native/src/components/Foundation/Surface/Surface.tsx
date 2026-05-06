import { View } from "react-native";
import { nativeThemes } from "../../../theme";
import { surfaceStyles } from "./Surface.styles";
import type { SurfaceProps } from "./Surface.types";

export function Surface({ children, muted = false, style, ...props }: SurfaceProps) {
  const theme = nativeThemes.light;

  return (
    <View
      style={[
        surfaceStyles.base,
        {
          backgroundColor: muted ? theme.color.background : theme.color.surface,
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
