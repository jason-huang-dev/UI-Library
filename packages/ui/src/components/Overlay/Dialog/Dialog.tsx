import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import MuiDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { forwardRef } from "react";
import type { DialogProps } from "./Dialog.types";

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  function Dialog(
    {
      actions,
      children,
      description,
      fullWidth = true,
      maxWidth = "sm",
      title,
      ...props
    },
    ref
  ) {
    return (
      <MuiDialog ref={ref} fullWidth={fullWidth} maxWidth={maxWidth} {...props}>
        {title ? <DialogTitle>{title}</DialogTitle> : null}
        {description || children ? (
          <DialogContent>
            {description ? (
              <DialogContentText sx={{ mb: children ? 2 : 0 }}>
                {description}
              </DialogContentText>
            ) : null}
            {children}
          </DialogContent>
        ) : null}
        {actions ? <DialogActions>{actions}</DialogActions> : null}
      </MuiDialog>
    );
  }
);

Dialog.displayName = "Dialog";
