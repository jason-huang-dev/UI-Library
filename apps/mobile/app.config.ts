import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Jason UI Mobile",
  slug: "jason-ui-mobile",
  version: "0.1.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#f7f4ee"
    }
  },
  extra: {
    eas: {
      projectId: "replace-with-eas-project-id"
    }
  }
};

export default config;
