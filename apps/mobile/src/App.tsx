import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Surface, Text } from "@jason-ui/ui-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Surface style={styles.panel}>
          <Text variant="title">Jason UI Mobile</Text>
          <Text muted>
            This app runs the React Native package on-device through Expo and
            EAS.
          </Text>
          <Button label="Create shipment" />
          <Button label="View inventory" variant="secondary" />
        </Surface>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  panel: {
    gap: 16
  },
  safeArea: {
    flex: 1
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 24
  }
});
