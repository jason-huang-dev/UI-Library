import type { ReactNode } from "react";
import { Pressable, StyleSheet, View, type ViewProps } from "react-native";
import { Text } from "../../Foundation/Text";

export type MenuItemDefinition = {
  disabled?: boolean;
  label: ReactNode;
  onPress?: () => void;
};

export type MenuProps = ViewProps & {
  items: MenuItemDefinition[];
  open?: boolean;
};

export function Menu({ items, open = true, style, ...props }: MenuProps) {
  if (!open) {
    return null;
  }

  return (
    <View style={[styles.base, style]} {...props}>
      {items.map((item, index) => (
        <Pressable
          disabled={item.disabled}
          key={index}
          onPress={item.onPress}
          style={[styles.item, item.disabled && styles.disabled]}
        >
          <Text>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    gap: 4
  },
  disabled: {
    opacity: 0.48
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 10
  }
});
