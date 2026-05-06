import type { TextFieldProps } from "../TextField";

export type NumberInputProps = Omit<TextFieldProps, "type"> & {
  max?: number;
  min?: number;
  step?: number | string;
};
