import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionBar } from "./ActionBar";

const actions = [
  { id: "draw", label: "Draw", tone: "primary" },
  { id: "play", label: "Play card", tone: "neutral" },
  { id: "pass", label: "Pass", tone: "neutral" },
  { id: "fold", label: "Fold", tone: "danger" }
] as const;

const meta = {
  title: "Vynora/ActionBar",
  component: ActionBar,
  tags: ["autodocs"],
  args: {
    actions: [...actions]
  }
} satisfies Meta<typeof ActionBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDisabledAction: Story = {
  args: {
    actions: [
      ...actions.slice(0, 2),
      { id: "trade", disabled: true, label: "Trade", tone: "neutral" },
      actions[3]
    ]
  }
};
