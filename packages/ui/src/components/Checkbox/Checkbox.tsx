import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { forwardRef } from "react";
import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      labelPlacement,
      ...props
    },
    ref
  ) {
    const control = <MuiCheckbox ref={ref} {...props} />;

    if (!label) {
      return control;
    }

    return (
      <FormControlLabel
        control={control}
        disabled={props.disabled}
        label={label}
        labelPlacement={labelPlacement}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
