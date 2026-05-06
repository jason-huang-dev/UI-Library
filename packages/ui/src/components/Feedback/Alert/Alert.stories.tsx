import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { Alert } from "./Alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    children: "Inventory sync completed with 3 skipped records.",
    severity: "info"
  },
  argTypes: {
    severity: {
      control: "select",
      options: ["success", "info", "warning", "error"]
    },
    variant: {
      control: "select",
      options: ["standard", "outlined", "filled"]
    }
  }
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Severities: Story = {
  render: () => (
    <Stack spacing={1.5}>
      <Alert severity="success">Order wave released successfully.</Alert>
      <Alert severity="info">New carrier rates are available.</Alert>
      <Alert severity="warning">Low stock detected in 4 bins.</Alert>
      <Alert severity="error">Shipment export failed.</Alert>
    </Stack>
  )
};

export const Filled: Story = {
  args: {
    severity: "success",
    variant: "filled"
  }
};
