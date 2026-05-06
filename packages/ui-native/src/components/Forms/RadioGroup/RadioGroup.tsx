import { Pressable, View } from "react-native";
import { nativeThemes } from "../../../theme";
import { Text } from "../../Foundation/Text";
import { radioGroupStyles } from "./RadioGroup.styles";
import type { RadioGroupProps } from "./RadioGroup.types";

export function RadioGroup({ label, onValueChange, options, style, value, ...props }: RadioGroupProps) {
  const theme = nativeThemes.light;

  return (
    <View style={[radioGroupStyles.base, style]} {...props}>
      {label ? <Text variant="label">{label}</Text> : null}
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <Pressable
            accessibilityRole="radio"
            accessibilityState={{ checked: selected, disabled: Boolean(option.disabled) }}
            disabled={option.disabled}
            key={option.value}
            onPress={() => onValueChange?.(option.value)}
            style={[radioGroupStyles.row, option.disabled && radioGroupStyles.disabled]}
          >
            <View style={[radioGroupStyles.outer, { borderColor: selected ? theme.color.primary : theme.color.border }]}>
              {selected ? <View style={[radioGroupStyles.inner, { backgroundColor: theme.color.primary }]} /> : null}
            </View>
            <Text>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
