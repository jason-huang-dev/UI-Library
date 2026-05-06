import type { TextFieldProps } from "../TextField";

export type SearchInputProps = Omit<TextFieldProps, "type"> & {
  clearLabel?: string;
  onClear?: () => void;
};
