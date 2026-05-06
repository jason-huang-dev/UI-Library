import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Surface } from "../../Foundation/Surface";
import { Text } from "../../Foundation/Text";
import { drawerStyles } from "./Drawer.styles";
import type { DrawerProps } from "./Drawer.types";

export function Drawer({ actions, children, description, onClose, open, title }: DrawerProps) {
  return (
    <Modal animationType="slide" onRequestClose={onClose} transparent visible={open}>
      <View style={drawerStyles.backdrop}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <Surface style={drawerStyles.panel}>
          {title ? <Text variant="title">{title}</Text> : null}
          {description ? <Text muted>{description}</Text> : null}
          <View style={drawerStyles.body}>{children}</View>
          {actions}
        </Surface>
      </View>
    </Modal>
  );
}
