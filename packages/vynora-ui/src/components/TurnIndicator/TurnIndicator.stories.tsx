import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { TurnIndicator } from "./TurnIndicator";

const meta = {
  title: "Vynora/TurnIndicator",
  component: TurnIndicator,
  tags: ["autodocs"],
  args: {
    active: true,
    label: "Your turn",
    secondsRemaining: 28
  }
} satisfies Meta<typeof TurnIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <TurnIndicator active label="Your turn" secondsRemaining={28} />
      <TurnIndicator label="Mira is choosing" />
    </View>
  )
};
