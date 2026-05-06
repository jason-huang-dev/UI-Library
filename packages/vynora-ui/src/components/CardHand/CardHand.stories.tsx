import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardHand } from "./CardHand";

const cards = [
  { id: "1", rank: "A", suit: "spades" },
  { id: "2", rank: "K", selected: true, suit: "hearts" },
  { id: "3", rank: "Q", suit: "diamonds" },
  { id: "4", rank: "J", suit: "clubs" },
  { id: "5", rank: "10", suit: "spades" }
] as const;

const meta = {
  title: "Vynora/CardHand",
  component: CardHand,
  tags: ["autodocs"],
  args: {
    cards: [...cards],
    compact: false,
    disabled: false
  }
} satisfies Meta<typeof CardHand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true
  }
};
