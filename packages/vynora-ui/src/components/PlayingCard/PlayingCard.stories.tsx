import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { PlayingCard } from "./PlayingCard";

const meta = {
  title: "Vynora/PlayingCard",
  component: PlayingCard,
  tags: ["autodocs"],
  args: {
    rank: "A",
    suit: "spades",
    selected: false,
    faceDown: false,
    disabled: false
  },
  argTypes: {
    rank: {
      control: "select",
      options: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    },
    suit: {
      control: "select",
      options: ["spades", "hearts", "diamonds", "clubs"]
    }
  }
} satisfies Meta<typeof PlayingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Suits: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <PlayingCard rank="A" suit="spades" />
      <PlayingCard rank="K" suit="hearts" />
      <PlayingCard rank="Q" suit="diamonds" />
      <PlayingCard rank="J" suit="clubs" />
    </View>
  )
};

export const States: Story = {
  render: () => (
    <View style={{ alignItems: "center", flexDirection: "row", gap: 18 }}>
      <PlayingCard rank="10" selected suit="hearts" />
      <PlayingCard faceDown />
      <PlayingCard disabled rank="4" suit="clubs" />
    </View>
  )
};
