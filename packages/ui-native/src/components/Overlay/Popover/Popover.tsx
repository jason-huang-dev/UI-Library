import { Surface } from "../../Foundation/Surface";
import { popoverStyles } from "./Popover.styles";
import type { PopoverProps } from "./Popover.types";

export function Popover({ children, open = true, style, ...props }: PopoverProps) {
  if (!open) {
    return null;
  }

  return (
    <Surface style={[popoverStyles.base, style]} {...props}>
      {children}
    </Surface>
  );
}
