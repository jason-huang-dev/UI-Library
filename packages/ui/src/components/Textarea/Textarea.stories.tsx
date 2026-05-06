import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "Receiving notes",
    placeholder: "Add handling notes for the warehouse team."
  }
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
    helperText: "Notes cannot exceed the maximum length."
  }
};
