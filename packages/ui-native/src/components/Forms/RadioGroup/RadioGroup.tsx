import type { ReactNode } from "react";
import { Pressable, StyleSheet, View, type ViewProps } from "react-native";
import { nativeThemes } from "../../../theme";
import { Text } from "../../Foundation/Text";

export type RadioOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string;
};

export type RadioGroupProps = ViewProps & {
  label?: ReactNode;
  onValueChange?: (value: string) => void;
  options: RadioOption[];
  value?: string;
};

export function RadioGroup({ label, onValueChange, options, style, value, ...props }: RadioGroupProps) {
  const theme = nativeThemes.light;

  return (
    <View style={[styles.base, style]} {...props}>
      {label ? <Text variant="label">{label}</Text> : null}
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <Pressable
            accessibilityRole="radio"
            accessibilityState={{ checked: selected, disabled: option.disabled }}
            disabled={option.disabled}
            key={option.value}
            onPress={() => onValueChange?.(option.value)}
            style={[styles.row, option.disabled && styles.disabled]}
          >
            <View style={[styles.outer, { borderColor: selected ? theme.color.primary : theme.color.border }]}>
              {selected ? <View style={[styles.inner, { backgroundColor: theme.color.primary }]} /> : null}
            </View>
            <Text>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    gap: 10
  },
  disabled: {
    opacity: 0.48
  },
  inner: {
    borderRadius: 5,
    height: 10,
    width: 10
  },
  outer: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    height: 20,
    justifyContent: "center",
    width: 20
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  }
});
