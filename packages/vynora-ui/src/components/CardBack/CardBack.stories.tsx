import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { CardBack } from "./CardBack";

const meta = {
  title: "Vynora/CardBack",
  component: CardBack,
  tags: ["autodocs"],
  args: {
    selected: false,
    disabled: false
  }
} satisfies Meta<typeof CardBack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 18 }}>
      <CardBack />
      <CardBack selected />
      <CardBack disabled />
    </View>
  )
};
