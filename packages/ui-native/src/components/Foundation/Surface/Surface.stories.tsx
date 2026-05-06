import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../Components/Button";
import { Surface } from "./Surface";
import { Text } from "../Text";

const meta = {
  title: "Foundation/Surface",
  component: Surface,
  tags: ["autodocs"],
  args: {
    muted: false
  }
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Surface {...args} style={{ gap: 12, maxWidth: 360 }}>
      <Text variant="title">Shipment queue</Text>
      <Text muted>12 orders are ready for carrier pickup.</Text>
      <Button label="View queue" />
    </Surface>
  )
};
