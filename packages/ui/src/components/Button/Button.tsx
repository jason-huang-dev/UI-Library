import MuiButton from "@mui/material/Button";
import type { ButtonProps } from "./Button.types";

export function Button(props: ButtonProps) {
  return <MuiButton {...props} />;
}