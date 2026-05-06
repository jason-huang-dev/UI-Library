import type { ReactNode } from "react";
import type { TextFieldProps } from "../TextField";

export type DatePickerProps = Omit<TextFieldProps, "type">;

export type DateRangePickerValue = {
  end?: string;
  start?: string;
};

export type DateRangePickerProps = {
  disabled?: boolean;
  endLabel?: ReactNode;
  endName?: string;
  error?: boolean;
  helperText?: ReactNode;
  id?: string;
  max?: string;
  min?: string;
  onChange?: (value: DateRangePickerValue) => void;
  required?: boolean;
  size?: TextFieldProps["size"];
  startLabel?: ReactNode;
  startName?: string;
  value?: DateRangePickerValue;
};
