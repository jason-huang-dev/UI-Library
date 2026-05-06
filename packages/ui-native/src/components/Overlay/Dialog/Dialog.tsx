import type { ReactNode } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Button } from "../../Components/Button";
import { Surface } from "../../Foundation/Surface";
import { Text } from "../../Foundation/Text";

export type DialogProps = {
  actions?: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
  onClose?: () => void;
  open: boolean;
  title?: ReactNode;
};

export function Dialog({ actions, children, description, onClose, open, title }: DialogProps) {
  return (
    <Modal animationType="fade" onRequestClose={onClose} transparent visible={open}>
      <View style={styles.backdrop}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <Surface style={styles.panel}>
          {title ? <Text variant="title">{title}</Text> : null}
          {description ? <Text muted>{description}</Text> : null}
          {children}
          <View style={styles.actions}>{actions ?? <Button label="Close" onPress={onClose} />}</View>
        </Surface>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  actions: {
    alignItems: "flex-end",
    marginTop: 8
  },
  backdrop: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  panel: {
    gap: 12,
    maxWidth: 420,
    width: "100%"
  }
});
