import type { MenuItemDefinition } from "../Menu";

export type ActionMenuProps = {
  items: MenuItemDefinition[];
  label?: string;
  open?: boolean;
  onOpen?: () => void;
};
