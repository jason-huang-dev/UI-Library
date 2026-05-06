import { Pressable, Text, View } from "react-native";
import { actionBarStyles } from "./ActionBar.styles";
import type { ActionBarProps, ActionButtonProps } from "./ActionBar.types";

function ActionButton({ action, onPress, style, ...props }: ActionButtonProps) {
  const tone = action.tone ?? "neutral";

  return (
    <Pressable
      accessibilityRole="button"
      disabled={action.disabled}
      onPress={onPress}
      style={(state) => [
        actionBarStyles.button,
        tone === "primary" && actionBarStyles.buttonPrimary,
        tone === "danger" && actionBarStyles.buttonDanger,
        tone === "neutral" && actionBarStyles.buttonNeutral,
        state.pressed && !action.disabled && actionBarStyles.buttonPressed,
        action.disabled && actionBarStyles.buttonDisabled,
        typeof style === "function" ? style(state) : style
      ]}
      {...props}
    >
      <Text
        style={[
          actionBarStyles.label,
          tone === "primary" && actionBarStyles.labelPrimary
        ]}
      >
        {action.label}
      </Text>
    </Pressable>
  );
}

export function ActionBar({
  actions,
  onActionPress,
  style,
  ...props
}: ActionBarProps) {
  return (
    <View style={[actionBarStyles.bar, style]} {...props}>
      {actions.map((action) => (
        <ActionButton
          action={action}
          key={action.id}
          onPress={() => onActionPress?.(action)}
        />
      ))}
    </View>
  );
}
