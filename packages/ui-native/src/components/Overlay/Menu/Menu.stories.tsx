import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./Menu";

const meta = { title: "Overlay/Menu", component: Menu, tags: ["autodocs"], args: { items: [{ label: "Edit" }, { label: "Duplicate" }, { label: "Archive" }] } } satisfies Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
