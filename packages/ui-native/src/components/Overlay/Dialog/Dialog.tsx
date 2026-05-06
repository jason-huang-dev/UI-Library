import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Button } from "../../Components/Button";
import { Surface } from "../../Foundation/Surface";
import { Text } from "../../Foundation/Text";
import { dialogStyles } from "./Dialog.styles";
import type { DialogProps } from "./Dialog.types";

export function Dialog({ actions, children, description, onClose, open, title }: DialogProps) {
  return (
    <Modal animationType="fade" onRequestClose={onClose} transparent visible={open}>
      <View style={dialogStyles.backdrop}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <Surface style={dialogStyles.panel}>
          {title ? <Text variant="title">{title}</Text> : null}
          {description ? <Text muted>{description}</Text> : null}
          {children}
          <View style={dialogStyles.actions}>{actions ?? <Button label="Close" onPress={onClose} />}</View>
        </Surface>
      </View>
    </Modal>
  );
}
