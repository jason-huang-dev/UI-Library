import { View } from "react-native";
import { Text } from "../../Foundation/Text";
import { alertSeverityColors, alertStyles } from "./Alert.styles";
import type { AlertProps } from "./Alert.types";

export function Alert({ children, severity = "info", style, title, ...props }: AlertProps) {
  return (
    <View style={[alertStyles.base, { backgroundColor: alertSeverityColors[severity] }, style]} {...props}>
      {title ? <Text variant="label">{title}</Text> : null}
      <Text>{children}</Text>
    </View>
  );
}
