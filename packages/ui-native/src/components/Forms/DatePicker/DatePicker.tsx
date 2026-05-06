import { TextField, type TextFieldProps } from "../TextField";

export type DatePickerProps = TextFieldProps;

export type DateRangePickerValue = {
  end?: string;
  start?: string;
};

export type DateRangePickerProps = {
  endPlaceholder?: string;
  onEndChangeText?: (value: string) => void;
  onStartChangeText?: (value: string) => void;
  startPlaceholder?: string;
  value?: DateRangePickerValue;
};

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
