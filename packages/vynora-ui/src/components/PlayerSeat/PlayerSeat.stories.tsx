import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { PlayerSeat } from "./PlayerSeat";

const meta = {
  title: "Vynora/PlayerSeat",
  component: PlayerSeat,
  tags: ["autodocs"],
  args: {
    active: true,
    cardCount: 5,
    chips: "1,240",
    name: "Mira"
  }
} satisfies Meta<typeof PlayerSeat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Seats: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <PlayerSeat active cardCount={5} chips="1,240" name="Mira" />
      <PlayerSeat cardCount={3} chips="820" name="Sol" petMood="sleepy" />
    </View>
  )
};
