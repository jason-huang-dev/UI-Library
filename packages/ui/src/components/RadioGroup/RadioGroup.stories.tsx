import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";

const options = [
  { label: "FIFO", value: "fifo" },
  { label: "LIFO", value: "lifo" },
  { label: "Manual", value: "manual" }
];

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    label: "Allocation strategy",
    options,
    value: "fifo"
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    row: true
  }
};

export const Error: Story = {
  args: {
    error: "Choose an allocation strategy.",
    value: ""
  }
};
