import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../../Components/Button";
import { Text } from "../../Foundation/Text";
import { Popover } from "./Popover";

const meta = {
  title: "Overlay/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: {
    open: false
  }
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    return (
      <>
        <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
          Show details
        </Button>
        <Popover
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          open={Boolean(anchorEl)}
        >
          <Text variant="label">Next appointment</Text>
          <Text muted>May 6, 2026 at dock 12.</Text>
        </Popover>
      </>
    );
  }
};
