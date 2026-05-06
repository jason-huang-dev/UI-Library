import { View } from "react-native";
import { Surface } from "../../Foundation/Surface";
import { Text } from "../../Foundation/Text";
import { emptyStateStyles } from "./EmptyState.styles";
import type { EmptyStateProps } from "./EmptyState.types";

export function EmptyState({ action, description, icon, style, title, ...props }: EmptyStateProps) {
  return (
    <Surface muted style={[emptyStateStyles.base, style]} {...props}>
      {icon}
      <View style={emptyStateStyles.copy}>
        <Text variant="title">{title}</Text>
        {description ? <Text muted>{description}</Text> : null}
      </View>
      {action}
    </Surface>
  );
}
