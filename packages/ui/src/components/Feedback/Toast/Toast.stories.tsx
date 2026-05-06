import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../../Components/Button";
import { Toast } from "./Toast";

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    message: "Pick list saved.",
    open: true,
    severity: "success"
  }
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show toast</Button>
        <Toast
          message="Pick list saved."
          onClose={() => setOpen(false)}
          open={open}
          severity="success"
          title="Saved"
        />
      </>
    );
  }
};
