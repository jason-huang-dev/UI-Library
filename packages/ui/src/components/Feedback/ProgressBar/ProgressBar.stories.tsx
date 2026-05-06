import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  args: {
    value: 64,
    variant: "determinate"
  }
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 520 }}>
      <ProgressBar />
      <ProgressBar value={42} variant="determinate" />
      <ProgressBar color="success" value={88} variant="determinate" />
    </Stack>
  )
};
