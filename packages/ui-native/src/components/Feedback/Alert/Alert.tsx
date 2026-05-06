import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { Text } from "../../Foundation/Text";

export type AlertSeverity = "error" | "info" | "success" | "warning";

export type AlertProps = ViewProps & {
  children: ReactNode;
  severity?: AlertSeverity;
  title?: ReactNode;
};

const severityColors = {
  error: "#FEE4E2",
  info: "#E0F2FE",
  success: "#DCFCE7",
  warning: "#FEF3C7"
};

export function Alert({ children, severity = "info", style, title, ...props }: AlertProps) {
  return (
    <View style={[styles.base, { backgroundColor: severityColors[severity] }, style]} {...props}>
      {title ? <Text variant="label">{title}</Text> : null}
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    gap: 4,
    padding: 12
  }
});
