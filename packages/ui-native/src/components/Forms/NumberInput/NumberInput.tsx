import { TextField, type TextFieldProps } from "../TextField";

export type NumberInputProps = Omit<TextFieldProps, "keyboardType">;

export function NumberInput(props: NumberInputProps) {
  return <TextField keyboardType="numeric" {...props} />;
}
