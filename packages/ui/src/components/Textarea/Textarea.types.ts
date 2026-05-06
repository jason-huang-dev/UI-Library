import type { TextFieldProps } from "../TextField";

export type TextareaProps = Omit<TextFieldProps, "multiline" | "type"> & {
  maxRows?: number;
  minRows?: number;
};
