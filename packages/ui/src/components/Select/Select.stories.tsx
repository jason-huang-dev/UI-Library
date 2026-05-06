import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const statusOptions = [
  { label: "Receiving", value: "receiving" },
  { label: "Picking", value: "picking" },
  { label: "Packed", value: "packed" },
  { disabled: true, label: "Archived", value: "archived" }
];

const meta = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Workflow status",
    options: statusOptions,
    value: "receiving"
  }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: "Controls which work queue receives this item."
  }
};

export const Error: Story = {
  args: {
    error: true,
    helperText: "Select a workflow status.",
    value: ""
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
