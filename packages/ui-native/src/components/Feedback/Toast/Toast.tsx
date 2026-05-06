import { Alert, type AlertProps } from "../Alert";

export type ToastProps = AlertProps & {
  open?: boolean;
};

export function Toast({ open = true, ...props }: ToastProps) {
  if (!open) {
    return null;
  }

  return <Alert {...props} />;
}
