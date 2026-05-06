import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Text } from "./Text";

const meta = {
  title: "Foundation/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Native text",
    variant: "body"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["title", "body", "caption", "label"]
    },
    muted: {
      control: "boolean"
    }
  }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Text variant="title">Inventory</Text>
      <Text variant="body">Aisle A has 24 active pick locations.</Text>
      <Text variant="label">Receiving</Text>
      <Text muted variant="caption">Last synced 2 minutes ago</Text>
    </View>
  )
};
