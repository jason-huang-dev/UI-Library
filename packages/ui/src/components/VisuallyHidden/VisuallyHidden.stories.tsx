import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { VisuallyHidden } from "./VisuallyHidden";

const meta = {
  title: "Foundation/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
  args: {
    children: "Additional accessible context"
  }
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InButton: Story = {
  render: () => (
    <Button>
      Save
      <VisuallyHidden> inbound receiving changes</VisuallyHidden>
    </Button>
  )
};
