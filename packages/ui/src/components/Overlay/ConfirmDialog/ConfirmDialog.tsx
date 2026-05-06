import { Button } from "../../Components/Button";
import { Dialog } from "../Dialog";
import type { ConfirmDialogProps } from "./ConfirmDialog.types";

export function ConfirmDialog({
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  intent = "primary",
  loading = false,
  onCancel,
  onClose,
  onConfirm,
  ...props
}: ConfirmDialogProps) {
  return (
    <Dialog
      actions={
        <>
          <Button
            disabled={loading}
            onClick={onCancel}
            variant="text"
          >
            {cancelLabel}
          </Button>
          <Button
            color={intent === "danger" ? "error" : "primary"}
            disabled={loading}
            onClick={onConfirm}
            variant="contained"
          >
            {confirmLabel}
          </Button>
        </>
      }
      onClose={onClose}
      {...props}
    />
  );
}
