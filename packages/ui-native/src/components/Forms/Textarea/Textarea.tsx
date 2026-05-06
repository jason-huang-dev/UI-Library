import { TextField } from "../TextField";
import type { TextareaProps } from "./Textarea.types";

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
