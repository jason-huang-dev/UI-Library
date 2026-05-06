import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "./NumberInput";

const meta = {
  title: "Forms/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  args: {
    label: "Quantity",
    min: 0,
    step: 1,
    value: 24
  }
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
    helperText: "Quantity cannot be lower than committed inventory.",
    value: -1
  }
};
