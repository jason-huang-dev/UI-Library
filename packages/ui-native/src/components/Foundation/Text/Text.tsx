import { Text as RNText } from "react-native";
import { nativeThemes } from "../../../theme";
import { textStyles } from "./Text.styles";
import type { TextProps } from "./Text.types";

export function Text({
  children,
  muted = false,
  style,
  variant = "body",
  ...props
}: TextProps) {
  const theme = nativeThemes.light;

  return (
    <RNText
      style={[
        textStyles.base,
        textStyles[variant],
        { color: muted ? theme.color.textMuted : theme.color.text },
        style
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}
