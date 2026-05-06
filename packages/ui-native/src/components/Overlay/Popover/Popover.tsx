import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { Surface } from "../../Foundation/Surface";

export type PopoverProps = ViewProps & {
  children: ReactNode;
  open?: boolean;
};

export function Popover({ children, open = true, style, ...props }: PopoverProps) {
  if (!open) {
    return null;
  }

  return (
    <Surface style={[styles.base, style]} {...props}>
      {children}
    </Surface>
  );
}

const styles = StyleSheet.create({
  base: {
    maxWidth: 320
  }
});
