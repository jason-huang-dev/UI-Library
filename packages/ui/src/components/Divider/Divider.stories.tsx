import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../Text";
import { Divider } from "./Divider";

const meta = {
  title: "Foundation/Divider",
  component: Divider,
  tags: ["autodocs"],
  args: {
    orientation: "horizontal"
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"]
    }
  }
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <Text variant="label">Shipment Details</Text>
      <Divider {...args} />
      <Text muted>Carrier, dock door, and appointment metadata.</Text>
    </div>
  )
};

export const Vertical: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", height: 48, gap: 16 }}>
      <Text>Open</Text>
      <Divider flexItem orientation="vertical" />
      <Text muted>Pending</Text>
    </div>
  )
};
