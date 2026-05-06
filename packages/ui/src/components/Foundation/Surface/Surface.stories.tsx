import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../Components/Button";
import { Text } from "../Text";
import { Surface } from "./Surface";

const meta = {
  title: "Foundation/Surface",
  component: Surface,
  tags: ["autodocs"],
  args: {
    muted: false,
    padding: 3
  },
  argTypes: {
    muted: {
      control: "boolean"
    },
    padding: {
      control: "number"
    }
  },
  render: (args) => (
    <Surface {...args} style={{ maxWidth: 420 }}>
      <div style={{ display: "grid", gap: 12 }}>
        <Text variant="h4">Inbound Queue</Text>
        <Text muted>
          Review receiving exceptions before inventory is released to available stock.
        </Text>
        <div>
          <Button size="small">Review</Button>
        </div>
      </div>
    </Surface>
  )
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Muted: Story = {
  args: {
    muted: true
  }
};
