import type { Preview } from "@storybook/react-vite";
import { StyleSheet, View } from "react-native";

const preview: Preview = {
  decorators: [
    (Story) => (
      <View style={styles.screen}>
        <Story />
      </View>
    )
  ]
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f7f4ee",
    minHeight: 640,
    padding: 24
  }
});

export default preview;
