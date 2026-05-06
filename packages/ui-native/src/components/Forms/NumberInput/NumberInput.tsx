import { TextField } from "../TextField";
import type { NumberInputProps } from "./NumberInput.types";

export function NumberInput(props: NumberInputProps) {
  return <TextField keyboardType="numeric" {...props} />;
}
