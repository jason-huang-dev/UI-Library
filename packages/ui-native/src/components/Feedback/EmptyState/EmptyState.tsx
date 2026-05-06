import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { Text } from "../../Foundation/Text";
import { Surface } from "../../Foundation/Surface";

export type EmptyStateProps = ViewProps & {
  action?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  title: ReactNode;
};

export function EmptyState({ action, description, icon, style, title, ...props }: EmptyStateProps) {
  return (
    <Surface muted style={[styles.base, style]} {...props}>
      {icon}
      <View style={styles.copy}>
        <Text variant="title">{title}</Text>
        {description ? <Text muted>{description}</Text> : null}
      </View>
      {action}
    </Surface>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    gap: 12
  },
  copy: {
    alignItems: "center",
    gap: 4
  }
});
