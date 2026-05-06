import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { Text } from "../../Foundation/Text";
import { ActionMenu } from "./ActionMenu";

const meta = {
  title: "Overlay/ActionMenu",
  component: ActionMenu,
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Edit" },
      { label: "Duplicate" },
      { divider: true, label: "Archive" },
      { label: "Delete" }
    ]
  }
} satisfies Meta<typeof ActionMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RowAction: Story = {
  render: (args) => (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        maxWidth: 420,
        p: 1.5
      }}
    >
      <div>
        <Text variant="label">SHP-1042</Text>
        <Text muted>Pending carrier pickup</Text>
      </div>
      <ActionMenu {...args} />
    </Stack>
  )
};
