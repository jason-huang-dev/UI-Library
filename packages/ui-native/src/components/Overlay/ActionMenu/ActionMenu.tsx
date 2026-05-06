import { Button } from "../../Components/Button";
import { Menu, type MenuItemDefinition } from "../Menu";

export type ActionMenuProps = {
  items: MenuItemDefinition[];
  label?: string;
  open?: boolean;
  onOpen?: () => void;
};

export function ActionMenu({ items, label = "Actions", onOpen, open = false }: ActionMenuProps) {
  return (
    <>
      <Button label={label} onPress={onOpen} variant="secondary" />
      <Menu items={items} open={open} />
    </>
  );
}
