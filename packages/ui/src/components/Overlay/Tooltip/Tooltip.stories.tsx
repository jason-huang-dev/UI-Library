import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../Components/Button";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    title: "Refresh inventory data"
  }
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Refresh</Button>
    </Tooltip>
  )
};
