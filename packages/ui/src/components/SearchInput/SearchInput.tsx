import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { forwardRef } from "react";
import { Icon } from "../Icon";
import { TextField } from "../TextField";
import type { SearchInputProps } from "./SearchInput.types";

const searchPath = (
  <path d="M9.5 4a5.5 5.5 0 0 1 4.383 8.823l3.147 3.147-1.06 1.06-3.147-3.147A5.5 5.5 0 1 1 9.5 4Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
);

const clearPath = (
  <path d="m7.05 5.99 4.95 4.95 4.95-4.95 1.06 1.06-4.95 4.95 4.95 4.95-1.06 1.06-4.95-4.95-4.95 4.95-1.06-1.06 4.95-4.95-4.95-4.95 1.06-1.06Z" />
);

export const SearchInput = forwardRef<HTMLDivElement, SearchInputProps>(
  function SearchInput(
    {
      clearLabel = "Clear search",
      InputProps,
      onClear,
      placeholder = "Search",
      value,
      ...props
    },
    ref
  ) {
    const hasValue = value !== undefined && String(value).length > 0;

    return (
      <TextField
        ref={ref}
        InputProps={{
          ...InputProps,
          startAdornment: (
            <InputAdornment position="start">
              <Icon color="action" decorative fontSize="small">
                {searchPath}
              </Icon>
            </InputAdornment>
          ),
          endAdornment: onClear && hasValue ? (
            <InputAdornment position="end">
              <IconButton
                aria-label={clearLabel}
                edge="end"
                onClick={onClear}
                size="small"
              >
                <Icon decorative fontSize="small">
                  {clearPath}
                </Icon>
              </IconButton>
            </InputAdornment>
          ) : InputProps?.endAdornment,
        }}
        placeholder={placeholder}
        type="search"
        value={value}
        {...props}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";
