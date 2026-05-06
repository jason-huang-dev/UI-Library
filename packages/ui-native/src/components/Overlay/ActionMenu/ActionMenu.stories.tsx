import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionMenu } from "./ActionMenu";

const meta = { title: "Overlay/ActionMenu", component: ActionMenu, tags: ["autodocs"], args: { open: true, items: [{ label: "Edit" }, { label: "Delete" }] } } satisfies Meta<typeof ActionMenu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
