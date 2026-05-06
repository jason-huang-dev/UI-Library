import FormControlLabel from "@mui/material/FormControlLabel";
import MuiSwitch from "@mui/material/Switch";
import { forwardRef } from "react";
import type { SwitchProps } from "./Switch.types";

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch(
    {
      label,
      labelPlacement,
      ...props
    },
    ref
  ) {
    const control = <MuiSwitch ref={ref} {...props} />;

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

Switch.displayName = "Switch";
