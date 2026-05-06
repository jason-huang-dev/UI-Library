import { View } from "react-native";
import { Button } from "../../Components/Button";
import { Text } from "../../Foundation/Text";
import { selectStyles } from "./Select.styles";
import type { SelectProps } from "./Select.types";

export function Select({ onValueChange, options, placeholder = "Select", style, value, ...props }: SelectProps) {
  const selected = options.find((option) => option.value === value);

  return (
    <View style={[selectStyles.base, style]} {...props}>
      <Button
        label={selected?.label ?? placeholder}
        onPress={() => {
          const currentIndex = Math.max(0, options.findIndex((option) => option.value === value));
          const next = options.slice(currentIndex + 1).find((option) => !option.disabled)
            ?? options.find((option) => !option.disabled);
          if (next) {
            onValueChange?.(next.value);
          }
        }}
        variant="secondary"
      />
      <Text muted variant="caption">Tap to cycle options.</Text>
    </View>
  );
}
