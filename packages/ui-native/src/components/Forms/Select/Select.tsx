import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { Button } from "../../Components/Button";
import { Text } from "../../Foundation/Text";

export type SelectOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string | number;
};

export type SelectProps = ViewProps & {
  onValueChange?: (value: string | number) => void;
  options: SelectOption[];
  placeholder?: string;
  value?: string | number;
};

export function Select({ onValueChange, options, placeholder = "Select", style, value, ...props }: SelectProps) {
  const selected = options.find((option) => option.value === value);

  return (
    <View style={[styles.base, style]} {...props}>
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

const styles = StyleSheet.create({
  base: {
    gap: 6
  }
});
