import { Button } from "../../Components/Button";
import { Menu } from "../Menu";
import type { ActionMenuProps } from "./ActionMenu.types";

export function ActionMenu({ items, label = "Actions", onOpen, open = false }: ActionMenuProps) {
  return (
    <>
      <Button label={label} onPress={onOpen} variant="secondary" />
      <Menu items={items} open={open} />
    </>
  );
}
