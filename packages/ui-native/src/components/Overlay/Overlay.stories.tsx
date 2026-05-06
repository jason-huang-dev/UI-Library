import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { View } from "react-native";
import { Button } from "../Components/Button";
import { Text } from "../Foundation/Text";
import { ActionMenu } from "./ActionMenu";
import { ConfirmDialog } from "./ConfirmDialog";
import { Drawer } from "./Drawer";
import { Menu } from "./Menu";
import { Popover } from "./Popover";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Overlay/Overview",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
      <View style={{ gap: 16, maxWidth: 420 }}>
        <Button label="Open confirm dialog" onPress={() => setConfirmOpen(true)} />
        <Button label="Open drawer" onPress={() => setDrawerOpen(true)} variant="secondary" />
        <Popover>
          <Text variant="label">Next appointment</Text>
          <Text muted>Dock 12 at 3:00 PM.</Text>
        </Popover>
        <Tooltip title="Refresh inventory">
          <Button label="Tooltip child" variant="secondary" />
        </Tooltip>
        <Menu
          items={[
            { label: "Edit" },
            { label: "Duplicate" },
            { label: "Archive" }
          ]}
        />
        <ActionMenu items={[{ label: "Edit" }, { label: "Delete" }]} />
        <ConfirmDialog
          confirmLabel="Delete"
          description="This action cannot be undone."
          onCancel={() => setConfirmOpen(false)}
          onClose={() => setConfirmOpen(false)}
          onConfirm={() => setConfirmOpen(false)}
          open={confirmOpen}
          title="Delete product?"
        />
        <Drawer
          description="Filter the shipment queue."
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          title="Shipment filters"
        >
          <Text>Drawer content</Text>
        </Drawer>
      </View>
    );
  }
};
