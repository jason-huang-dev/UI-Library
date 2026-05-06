import type { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

export type VisuallyHiddenProps = {
  children: ReactNode;
};

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <Text style={styles.hidden}>{children}</Text>;
}

const styles = StyleSheet.create({
  hidden: {
    height: 1,
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    width: 1
  }
});
