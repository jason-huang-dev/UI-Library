import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { Text } from "../../Foundation/Text";

export type FormFieldProps = ViewProps & {
  children: ReactNode;
  error?: ReactNode;
  helperText?: ReactNode;
  label?: ReactNode;
  required?: boolean;
};

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
    <View style={[styles.base, style]} {...props}>
      {label ? (
        <Text variant="label">
          {label}
          {required ? " *" : ""}
        </Text>
      ) : null}
      {children}
      {error || helperText ? (
        <Text muted={!error} style={error ? styles.error : undefined} variant="caption">
          {error ?? helperText}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    gap: 6
  },
  error: {
    color: "#B42318"
  }
});
