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
    mode: "full",
    frame: "default",
    foil: false,
    glow: false,
    playable: false,
    invalid: false,
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
    },
    mode: {
      control: "select",
      options: ["full", "compact", "mini", "opponent", "faceDown"]
    },
    frame: {
      control: "select",
      options: ["default", "rare", "legendary"]
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
      <PlayingCard playable rank="8" suit="clubs" />
      <PlayingCard invalid rank="2" suit="diamonds" />
      <PlayingCard faceDown />
      <PlayingCard disabled rank="4" suit="clubs" />
    </View>
  )
};

export const Modes: Story = {
  render: () => (
    <View style={{ alignItems: "center", flexDirection: "row", gap: 18 }}>
      <PlayingCard mode="full" rank="A" suit="spades" />
      <PlayingCard mode="compact" rank="A" suit="spades" />
      <PlayingCard mode="mini" rank="A" suit="spades" />
      <PlayingCard mode="opponent" rank="A" suit="spades" />
      <PlayingCard mode="faceDown" />
    </View>
  )
};

export const Cosmetics: Story = {
  render: () => (
    <View style={{ alignItems: "center", flexDirection: "row", gap: 18 }}>
      <PlayingCard frame="default" rank="7" suit="clubs" />
      <PlayingCard frame="rare" glow rank="Q" suit="diamonds" />
      <PlayingCard foil frame="legendary" glow rank="K" suit="hearts" />
    </View>
  )
};
