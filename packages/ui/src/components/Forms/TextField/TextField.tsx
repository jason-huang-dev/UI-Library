import MuiTextField from "@mui/material/TextField";
import { forwardRef } from "react";
import type { TextFieldProps } from "./TextField.types";

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  function TextField(
    {
      fullWidth = true,
      size = "small",
      variant = "outlined",
      ...props
    },
    ref
  ) {
    return (
      <MuiTextField
        ref={ref}
        fullWidth={fullWidth}
        size={size}
        variant={variant}
        {...props}
      />
    );
  }
);

TextField.displayName = "TextField";
