import { TextField, type TextFieldProps } from "../TextField";

export type TextareaProps = TextFieldProps;

export function Textarea(props: TextareaProps) {
  return (
    <TextField
      multiline
      numberOfLines={4}
      textAlignVertical="top"
      {...props}
    />
  );
}
