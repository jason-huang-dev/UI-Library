import { Pressable, View } from "react-native";
import { nativeThemes } from "../../../theme";
import { Text } from "../../Foundation/Text";
import { checkboxStyles } from "./Checkbox.styles";
import type { CheckboxProps } from "./Checkbox.types";

export function Checkbox({ checked = false, disabled = false, label, style, ...props }: CheckboxProps) {
  const theme = nativeThemes.light;

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled: Boolean(disabled) }}
      disabled={Boolean(disabled)}
      style={(state) => [
        checkboxStyles.row,
        disabled && checkboxStyles.disabled,
        typeof style === "function" ? style(state) : style
      ]}
      {...props}
    >
      <View
        style={[
          checkboxStyles.box,
          {
            backgroundColor: checked ? theme.color.primary : theme.color.surface,
            borderColor: checked ? theme.color.primary : theme.color.border
          }
        ]}
      />
      {label ? <Text>{label}</Text> : null}
    </Pressable>
  );
}
