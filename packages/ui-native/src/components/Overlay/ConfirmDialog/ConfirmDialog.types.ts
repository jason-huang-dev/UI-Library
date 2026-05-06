import type { DialogProps } from "../Dialog";

export type ConfirmDialogProps = Omit<DialogProps, "actions" | "children"> & {
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm: () => void;
};
