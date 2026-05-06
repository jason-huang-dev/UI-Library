import { TextInput } from "react-native";
import { nativeThemes } from "../../../theme";
import { textFieldStyles } from "./TextField.styles";
import type { TextFieldProps } from "./TextField.types";

export function TextField({ error = false, placeholderTextColor, style, ...props }: TextFieldProps) {
  const theme = nativeThemes.light;

  return (
    <TextInput
      placeholderTextColor={placeholderTextColor ?? theme.color.textSubtle}
      style={[
        textFieldStyles.input,
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
