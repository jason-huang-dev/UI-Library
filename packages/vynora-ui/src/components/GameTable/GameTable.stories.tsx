import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { ActionBar } from "../ActionBar";
import { CardHand } from "../CardHand";
import { PlayerSeat } from "../PlayerSeat";
import { TurnIndicator } from "../TurnIndicator";
import { GameTable } from "./GameTable";

const cards = [
  { id: "1", rank: "A", suit: "spades" },
  { id: "2", rank: "K", selected: true, suit: "hearts" },
  { id: "3", rank: "Q", suit: "diamonds" },
  { id: "4", rank: "J", suit: "clubs" }
] as const;

const meta = {
  title: "Vynora/GameTable",
  component: GameTable,
  tags: ["autodocs"]
} satisfies Meta<typeof GameTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <GameTable
      actionBar={
        <ActionBar
          actions={[
            { id: "draw", label: "Draw", tone: "primary" },
            { id: "play", label: "Play card" },
            { id: "pass", label: "Pass" }
          ]}
        />
      }
      playerSeats={
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <PlayerSeat active cardCount={4} chips="1,240" name="Mira" />
          <PlayerSeat cardCount={3} chips="820" name="Sol" />
        </View>
      }
      status={<TurnIndicator active label="Mira's turn" secondsRemaining={24} />}
    >
      <CardHand cards={[...cards]} />
    </GameTable>
  )
};
