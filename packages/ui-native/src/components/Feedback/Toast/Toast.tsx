import { Alert } from "../Alert";
import type { ToastProps } from "./Toast.types";

export function Toast({ open = true, ...props }: ToastProps) {
  if (!open) {
    return null;
  }

  return <Alert {...props} />;
}
