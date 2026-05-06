import { Button } from "../../Components/Button";
import { Dialog } from "../Dialog";
import type { ConfirmDialogProps } from "./ConfirmDialog.types";

export function ConfirmDialog({
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  onCancel,
  onConfirm,
  ...props
}: ConfirmDialogProps) {
  return (
    <Dialog
      actions={
        <>
          <Button label={cancelLabel} onPress={onCancel} variant="secondary" />
          <Button label={confirmLabel} onPress={onConfirm} />
        </>
      }
      {...props}
    />
  );
}
