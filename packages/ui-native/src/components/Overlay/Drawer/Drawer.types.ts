import type { ReactNode } from "react";

export type DrawerProps = {
  actions?: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
  onClose?: () => void;
  open: boolean;
  title?: ReactNode;
};
