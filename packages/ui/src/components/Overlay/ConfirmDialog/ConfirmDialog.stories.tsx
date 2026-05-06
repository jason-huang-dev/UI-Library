import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../../Components/Button";
import { ConfirmDialog } from "./ConfirmDialog";

const meta = {
  title: "Overlay/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  args: {
    confirmLabel: "Delete",
    description: "This action cannot be undone.",
    intent: "danger",
    open: true,
    title: "Delete product?",
    onConfirm: () => undefined
  }
} satisfies Meta<typeof ConfirmDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button color="error" onClick={() => setOpen(true)}>
          Delete product
        </Button>
        <ConfirmDialog
          confirmLabel="Delete"
          description="This action cannot be undone."
          intent="danger"
          onCancel={() => setOpen(false)}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          open={open}
          title="Delete product?"
        />
      </>
    );
  }
};
