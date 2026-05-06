import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../Components/Button";
import { ErrorState } from "./ErrorState";

const meta = {
  title: "Feedback/ErrorState",
  component: ErrorState,
  tags: ["autodocs"],
  args: {
    action: <Button color="error">Retry</Button>,
    description: "The shipment table could not be loaded.",
    title: "Unable to load shipments"
  }
} satisfies Meta<typeof ErrorState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
