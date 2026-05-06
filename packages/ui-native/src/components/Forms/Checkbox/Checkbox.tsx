import { Pressable, StyleSheet, View, type PressableProps } from "react-native";
import { nativeThemes } from "../../../theme";
import { Text } from "../../Foundation/Text";

export type CheckboxProps = Omit<PressableProps, "children"> & {
  checked?: boolean;
  label?: string;
};

export function Checkbox({ checked = false, disabled = false, label, style, ...props }: CheckboxProps) {
  const theme = nativeThemes.light;

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled: Boolean(disabled) }}
      disabled={Boolean(disabled)}
      style={(state) => [
        styles.row,
        disabled && styles.disabled,
        typeof style === "function" ? style(state) : style
      ]}
      {...props}
    >
      <View
        style={[
          styles.box,
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

const styles = StyleSheet.create({
  box: {
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    height: 20,
    width: 20
  },
  disabled: {
    opacity: 0.48
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  }
});
