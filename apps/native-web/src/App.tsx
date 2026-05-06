import { StyleSheet, View } from "react-native";
import { Button, Surface, Text } from "@jason-ui/ui-native";

export function App() {
  return (
    <View style={styles.screen}>
      <Surface style={styles.panel}>
        <Text variant="title">Native Web Preview</Text>
        <Text muted>
          These components come from @jason-ui/ui-native and render through
          React Native Web.
        </Text>
        <Button label="Save changes" />
        <Button label="Secondary action" variant="secondary" />
        <Button
          label="Open native Storybook"
          onPress={() => {
            window.location.href = "/native/";
          }}
          variant="secondary"
        />
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    gap: 16,
    maxWidth: 420,
    width: "100%"
  },
  screen: {
    alignItems: "center",
    minHeight: 640,
    padding: 24
  }
});
