import MenuItem from "@mui/material/MenuItem";
import { forwardRef } from "react";
import { TextField } from "../TextField";
import type { SelectProps } from "./Select.types";

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  function Select({ options, ...props }, ref) {
    return (
      <TextField ref={ref} select {...props}>
        {options.map((option) => (
          <MenuItem
            key={String(option.value)}
            disabled={option.disabled}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
);

Select.displayName = "Select";
