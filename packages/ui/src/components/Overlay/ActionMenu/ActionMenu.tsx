import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Icon } from "../../Foundation/Icon";
import { Menu } from "../Menu";
import type { ActionMenuProps } from "./ActionMenu.types";

const morePath = (
  <path d="M12 8.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Zm0 5.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Zm0 5.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z" />
);

export function ActionMenu({
  items,
  label = "Open actions",
  trigger,
  ...props
}: ActionMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        aria-label={label}
        aria-controls={open ? "action-menu" : undefined}
        aria-expanded={open ? true : undefined}
        aria-haspopup="menu"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        size="small"
        {...props}
      >
        {trigger ?? (
          <Icon decorative fontSize="small">
            {morePath}
          </Icon>
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="action-menu"
        items={items.map((item) => ({
          ...item,
          onClick: () => {
            item.onClick?.();
            setAnchorEl(null);
          }
        }))}
        onClose={() => setAnchorEl(null)}
        open={open}
      />
    </>
  );
}
