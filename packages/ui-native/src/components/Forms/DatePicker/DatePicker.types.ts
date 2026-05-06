import type { TextFieldProps } from "../TextField";

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
