import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "../FormField";
import { TextField } from "./TextField";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: {
    label: "Warehouse name",
    placeholder: "North dock",
    disabled: false
  }
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFormField: Story = {
  render: () => (
    <FormField
      helperText="Use the public warehouse display name."
      label="Warehouse name"
      required
    >
      <TextField placeholder="North dock" />
    </FormField>
  )
};

export const Error: Story = {
  args: {
    error: true,
    helperText: "Warehouse name is required.",
    label: "Warehouse name"
  }
};

export const ReadOnly: Story = {
  args: {
    InputProps: { readOnly: true },
    label: "Shipment ID",
    value: "SHP-1042"
  }
};
