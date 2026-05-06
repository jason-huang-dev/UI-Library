import Stack from "@mui/material/Stack";
import { forwardRef, useId } from "react";
import { TextField } from "../TextField";
import type { DatePickerProps, DateRangePickerProps } from "./DatePicker.types";

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  function DatePicker(props, ref) {
    return (
      <TextField
        ref={ref}
        InputLabelProps={{ shrink: true, ...props.InputLabelProps }}
        type="date"
        {...props}
      />
    );
  }
);

DatePicker.displayName = "DatePicker";

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  function DateRangePicker(
    {
      disabled = false,
      endLabel = "End date",
      endName,
      error = false,
      helperText,
      id,
      max,
      min,
      onChange,
      required = false,
      size = "small",
      startLabel = "Start date",
      startName,
      value,
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const baseId = id ?? `date-range-${generatedId}`;

    return (
      <Stack
        ref={ref}
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        {...props}
      >
        <DatePicker
          disabled={disabled}
          error={error}
          helperText={helperText}
          id={`${baseId}-start`}
          inputProps={{ max, min }}
          label={startLabel}
          name={startName}
          onChange={(event) => {
            onChange?.({
              end: value?.end,
              start: event.target.value
            });
          }}
          required={required}
          size={size}
          value={value?.start ?? ""}
        />
        <DatePicker
          disabled={disabled}
          error={error}
          id={`${baseId}-end`}
          inputProps={{ max, min: value?.start ?? min }}
          label={endLabel}
          name={endName}
          onChange={(event) => {
            onChange?.({
              end: event.target.value,
              start: value?.start
            });
          }}
          required={required}
          size={size}
          value={value?.end ?? ""}
        />
      </Stack>
    );
  }
);

DateRangePicker.displayName = "DateRangePicker";
