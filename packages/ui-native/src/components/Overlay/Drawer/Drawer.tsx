import type { ReactNode } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Surface } from "../../Foundation/Surface";
import { Text } from "../../Foundation/Text";

export type DrawerProps = {
  actions?: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
  onClose?: () => void;
  open: boolean;
  title?: ReactNode;
};

export function Drawer({ actions, children, description, onClose, open, title }: DrawerProps) {
  return (
    <Modal animationType="slide" onRequestClose={onClose} transparent visible={open}>
      <View style={styles.backdrop}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <Surface style={styles.panel}>
          {title ? <Text variant="title">{title}</Text> : null}
          {description ? <Text muted>{description}</Text> : null}
          <View style={styles.body}>{children}</View>
          {actions}
        </Surface>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.25)",
    flex: 1
  },
  body: {
    flex: 1
  },
  panel: {
    borderRadius: 0,
    gap: 12,
    height: "100%",
    width: 360
  }
});
