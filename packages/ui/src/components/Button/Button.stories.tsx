import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "contained",
    color: "primary",
    size: "medium"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"]
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "warning", "info"]
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"]
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Stack>
  )
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="error">Error</Button>
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Stack>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};