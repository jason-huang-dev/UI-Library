import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { LoadingSpinner } from "./LoadingSpinner";

const meta = {
  title: "Feedback/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
  args: {
    size: 32
  }
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Stack alignItems="center" direction="row" spacing={3}>
      <LoadingSpinner size={20} />
      <LoadingSpinner size={32} />
      <LoadingSpinner size={48} />
    </Stack>
  )
};
