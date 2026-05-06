import type { ReactNode } from "react";
import type { DialogProps } from "../Dialog";

export type ConfirmDialogIntent = "danger" | "primary";

export type ConfirmDialogProps = Omit<DialogProps, "actions" | "children"> & {
  cancelLabel?: ReactNode;
  confirmLabel?: ReactNode;
  intent?: ConfirmDialogIntent;
  loading?: boolean;
  onCancel?: () => void;
  onConfirm: () => void;
};
