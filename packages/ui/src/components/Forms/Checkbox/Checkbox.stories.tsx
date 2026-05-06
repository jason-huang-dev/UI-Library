import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Include backordered inventory"
  }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <Stack spacing={1}>
      <Checkbox label="Unchecked" />
      <Checkbox checked label="Checked" />
      <Checkbox indeterminate label="Partially selected" />
      <Checkbox disabled label="Disabled" />
    </Stack>
  )
};
