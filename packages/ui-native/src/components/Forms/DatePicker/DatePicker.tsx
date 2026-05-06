import { TextField } from "../TextField";
import type { DatePickerProps, DateRangePickerProps } from "./DatePicker.types";

export function DatePicker({ placeholder = "YYYY-MM-DD", ...props }: DatePickerProps) {
  return <TextField placeholder={placeholder} {...props} />;
}

export function DateRangePicker({
  endPlaceholder = "End date",
  onEndChangeText,
  onStartChangeText,
  startPlaceholder = "Start date",
  value
}: DateRangePickerProps) {
  return (
    <>
      <DatePicker
        onChangeText={onStartChangeText}
        placeholder={startPlaceholder}
        value={value?.start}
      />
      <DatePicker
        onChangeText={onEndChangeText}
        placeholder={endPlaceholder}
        value={value?.end}
      />
    </>
  );
}
