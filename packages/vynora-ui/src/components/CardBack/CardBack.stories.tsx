import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { CardBack } from "./CardBack";

const meta = {
  title: "Vynora/CardBack",
  component: CardBack,
  tags: ["autodocs"],
  args: {
    variant: "classic",
    mode: "full",
    selected: false,
    glow: false,
    disabled: false
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["classic", "premium", "pet"]
    },
    mode: {
      control: "select",
      options: ["full", "compact", "mini", "opponent"]
    }
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
      <CardBack glow variant="premium" />
      <CardBack disabled />
    </View>
  )
};

export const Variants: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 18 }}>
      <CardBack variant="classic" />
      <CardBack variant="premium" />
      <CardBack variant="pet" />
    </View>
  )
};
