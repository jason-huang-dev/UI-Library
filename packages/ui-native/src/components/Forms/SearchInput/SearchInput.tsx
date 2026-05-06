import { TextField, type TextFieldProps } from "../TextField";

export type SearchInputProps = Omit<TextFieldProps, "keyboardType">;

export function SearchInput({ placeholder = "Search", ...props }: SearchInputProps) {
  return (
    <TextField
      keyboardType="default"
      placeholder={placeholder}
      returnKeyType="search"
      {...props}
    />
  );
}
