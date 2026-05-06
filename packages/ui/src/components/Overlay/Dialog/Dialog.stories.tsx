import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../../Components/Button";
import { TextField } from "../../Forms/TextField";
import { Dialog } from "./Dialog";

const meta = {
  title: "Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: {
    description: "Update the warehouse-facing display name.",
    open: true,
    title: "Edit warehouse"
  }
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Dialog
      {...args}
      actions={<Button>Save changes</Button>}
    >
      <TextField label="Warehouse name" value="North dock" />
    </Dialog>
  )
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog
          actions={
            <>
              <Button onClick={() => setOpen(false)} variant="text">
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </>
          }
          description="Update the warehouse-facing display name."
          onClose={() => setOpen(false)}
          open={open}
          title="Edit warehouse"
        >
          <TextField label="Warehouse name" value="North dock" />
        </Dialog>
      </>
    );
  }
};
