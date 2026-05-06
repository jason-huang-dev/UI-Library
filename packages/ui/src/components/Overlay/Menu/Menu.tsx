import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiMenu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import { forwardRef } from "react";
import type { MenuProps } from "./Menu.types";

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  function Menu(
    {
      anchorOrigin = { horizontal: "left", vertical: "bottom" },
      items,
      transformOrigin = { horizontal: "left", vertical: "top" },
      ...props
    },
    ref
  ) {
    return (
      <MuiMenu
        ref={ref}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        {...props}
      >
        {items.map((item, index) => (
          <MuiMenuItem
            key={index}
            disabled={item.disabled}
            divider={item.divider}
            onClick={item.onClick}
            selected={item.selected}
          >
            {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
            <ListItemText>{item.label}</ListItemText>
          </MuiMenuItem>
        ))}
      </MuiMenu>
    );
  }
);

Menu.displayName = "Menu";
