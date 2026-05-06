import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import { cloneElement, forwardRef, isValidElement, useId } from "react";
import type { FormFieldProps } from "./FormField.types";

type DescribedChildProps = {
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  required?: boolean;
};

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  function FormField(
    {
      children,
      disabled = false,
      error,
      fullWidth = true,
      helperText,
      id,
      label,
      required = false,
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const fieldId = id ?? `field-${generatedId}`;
    const helperId = helperText || error ? `${fieldId}-helper-text` : undefined;
    const hasError = Boolean(error);

    const child = isValidElement<DescribedChildProps>(children)
      ? cloneElement(children, {
          "aria-describedby": helperId,
          "aria-invalid": hasError || undefined,
          disabled,
          error: hasError,
          id: children.props.id ?? fieldId,
          required
        })
      : children;

    return (
      <FormControl
        ref={ref}
        disabled={disabled}
        error={hasError}
        fullWidth={fullWidth}
        required={required}
        {...props}
      >
        {label ? (
          <FormLabel htmlFor={fieldId} sx={{ mb: 0.75 }}>
            {label}
          </FormLabel>
        ) : null}
        {child}
        {helperText || error ? (
          <FormHelperText id={helperId} sx={{ mx: 0, mt: 0.75 }}>
            {error ?? helperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  }
);

FormField.displayName = "FormField";
