import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../../Components/Button";
import { Menu } from "./Menu";

const items = [
  { label: "Edit" },
  { label: "Duplicate" },
  { divider: true, label: "Archive" },
  { label: "Delete" }
];

const meta = {
  title: "Overlay/Menu",
  component: Menu,
  tags: ["autodocs"],
  args: {
    items,
    open: false
  }
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    return (
      <>
        <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
          Open menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          items={items}
          onClose={() => setAnchorEl(null)}
          open={Boolean(anchorEl)}
        />
      </>
    );
  }
};
