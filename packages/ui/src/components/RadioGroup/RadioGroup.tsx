import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import MuiRadio from "@mui/material/Radio";
import MuiRadioGroup from "@mui/material/RadioGroup";
import { forwardRef, useId } from "react";
import type { RadioGroupProps } from "./RadioGroup.types";

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(
    {
      disabled = false,
      error,
      fullWidth = true,
      helperText,
      label,
      options,
      required = false,
      size = "small",
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const labelId = label ? `radio-group-${generatedId}-label` : undefined;
    const helperId = helperText || error
      ? `radio-group-${generatedId}-helper-text`
      : undefined;
    const hasError = Boolean(error);

    return (
      <FormControl
        disabled={disabled}
        error={hasError}
        fullWidth={fullWidth}
        required={required}
      >
        {label ? (
          <FormLabel id={labelId} sx={{ mb: 0.75 }}>
            {label}
          </FormLabel>
        ) : null}
        <MuiRadioGroup
          ref={ref}
          aria-describedby={helperId}
          aria-labelledby={labelId}
          {...props}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              control={<MuiRadio size={size} />}
              disabled={option.disabled}
              label={option.label}
              value={option.value}
            />
          ))}
        </MuiRadioGroup>
        {helperText || error ? (
          <FormHelperText id={helperId} sx={{ mx: 0, mt: 0.75 }}>
            {error ?? helperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
