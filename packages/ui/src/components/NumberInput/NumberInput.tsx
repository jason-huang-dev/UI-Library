import { forwardRef } from "react";
import { TextField } from "../TextField";
import type { NumberInputProps } from "./NumberInput.types";

export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  function NumberInput(
    {
      inputProps,
      max,
      min,
      step,
      ...props
    },
    ref
  ) {
    return (
      <TextField
        ref={ref}
        inputProps={{
          max,
          min,
          step,
          ...inputProps
        }}
        type="number"
        {...props}
      />
    );
  }
);

NumberInput.displayName = "NumberInput";
