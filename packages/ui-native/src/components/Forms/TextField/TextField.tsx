import { StyleSheet, TextInput, type TextInputProps } from "react-native";
import { nativeThemes } from "../../../theme";

export type TextFieldProps = TextInputProps & {
  error?: boolean;
};

export function TextField({ error = false, placeholderTextColor, style, ...props }: TextFieldProps) {
  const theme = nativeThemes.light;

  return (
    <TextInput
      placeholderTextColor={placeholderTextColor ?? theme.color.textSubtle}
      style={[
        styles.input,
        {
          borderColor: error ? theme.color.danger : theme.color.border,
          color: theme.color.text
        },
        style
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    minHeight: 44,
    paddingHorizontal: 12,
    paddingVertical: 10
  }
});
