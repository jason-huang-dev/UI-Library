import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../../Components/Button";
import { TextField } from "../../Forms/TextField";
import { Drawer } from "./Drawer";

const meta = {
  title: "Overlay/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  args: {
    description: "Filter the shipment queue.",
    open: true,
    title: "Shipment filters"
  }
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Drawer
      {...args}
      actions={<Button>Apply filters</Button>}
    >
      <TextField label="Carrier" placeholder="FedEx, UPS, DHL" />
    </Drawer>
  )
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer
          actions={<Button onClick={() => setOpen(false)}>Apply filters</Button>}
          description="Filter the shipment queue."
          onClose={() => setOpen(false)}
          open={open}
          title="Shipment filters"
        >
          <TextField label="Carrier" placeholder="FedEx, UPS, DHL" />
        </Drawer>
      </>
    );
  }
};
