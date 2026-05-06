import { View } from "react-native";
import { Text } from "../../Foundation/Text";
import { formFieldStyles } from "./FormField.styles";
import type { FormFieldProps } from "./FormField.types";

export function FormField({
  children,
  error,
  helperText,
  label,
  required = false,
  style,
  ...props
}: FormFieldProps) {
  return (
    <View style={[formFieldStyles.base, style]} {...props}>
      {label ? (
        <Text variant="label">
          {label}
          {required ? " *" : ""}
        </Text>
      ) : null}
      {children}
      {error || helperText ? (
        <Text muted={!error} style={error ? formFieldStyles.error : undefined} variant="caption">
          {error ?? helperText}
        </Text>
      ) : null}
    </View>
  );
}
