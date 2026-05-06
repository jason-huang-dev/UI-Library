import { Button } from "../../Components/Button";
import { Dialog, type DialogProps } from "../Dialog";

export type ConfirmDialogProps = Omit<DialogProps, "actions" | "children"> & {
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm: () => void;
};

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
