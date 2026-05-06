import type { Preview } from "@storybook/react-vite";
import { UIProvider, muiThemes } from "@jason-ui/ui";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: "light"
  },
  decorators: [
    (Story, context) => {
      const themeMode = context.globals.theme === "dark" ? "dark" : "light";
      const theme = muiThemes[themeMode];

      return (
        <UIProvider mode={themeMode}>
          <div
            style={{
              backgroundColor: theme.palette.background.default,
              boxSizing: "border-box",
              color: theme.palette.text.primary,
              minHeight: context.viewMode === "docs" ? 80 : "100vh",
              padding: theme.spacing(2)
            }}
          >
            <Story />
          </div>
        </UIProvider>
      );
    }
  ]
};

export default preview;
