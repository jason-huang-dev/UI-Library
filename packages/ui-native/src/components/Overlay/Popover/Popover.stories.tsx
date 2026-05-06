import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../Foundation/Text";
import { Popover } from "./Popover";

const meta = { title: "Overlay/Popover", component: Popover, tags: ["autodocs"] } satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Popover><Text variant="label">Next appointment</Text><Text muted>Dock 12 at 3:00 PM.</Text></Popover> };
