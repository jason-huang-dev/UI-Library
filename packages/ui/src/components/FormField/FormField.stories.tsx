import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { Checkbox } from "../Checkbox";
import { TextField } from "../TextField";
import { FormField } from "./FormField";

const meta = {
  title: "Forms/FormField",
  component: FormField,
  tags: ["autodocs"],
  args: {
    helperText: "Use a name operators recognize.",
    label: "Bin location",
    required: false
  }
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormField {...args}>
      <TextField placeholder="A-12-04" />
    </FormField>
  )
};

export const Error: Story = {
  render: () => (
    <FormField error="Bin location is required." label="Bin location" required>
      <TextField placeholder="A-12-04" />
    </FormField>
  )
};

export const MixedControls: Story = {
  render: () => (
    <Stack spacing={2}>
      <FormField helperText="Scans into the active pick wave." label="Scan target">
        <TextField placeholder="SKU or barcode" />
      </FormField>
      <Checkbox label="Require supervisor approval" />
    </Stack>
  )
};
