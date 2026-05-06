import { Pressable, View } from "react-native";
import { Text } from "../../Foundation/Text";
import { menuStyles } from "./Menu.styles";
import type { MenuProps } from "./Menu.types";

export function Menu({ items, open = true, style, ...props }: MenuProps) {
  if (!open) {
    return null;
  }

  return (
    <View style={[menuStyles.base, style]} {...props}>
      {items.map((item, index) => (
        <Pressable
          disabled={item.disabled}
          key={index}
          onPress={item.onPress}
          style={[menuStyles.item, item.disabled && menuStyles.disabled]}
        >
          <Text>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
