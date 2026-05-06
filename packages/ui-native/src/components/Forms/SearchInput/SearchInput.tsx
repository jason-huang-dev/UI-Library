import { TextField } from "../TextField";
import type { SearchInputProps } from "./SearchInput.types";

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
