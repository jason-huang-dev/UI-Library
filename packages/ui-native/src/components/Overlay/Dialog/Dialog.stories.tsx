import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "./Dialog";

const meta = { title: "Overlay/Dialog", component: Dialog, tags: ["autodocs"], args: { open: true, title: "Edit warehouse", description: "Update the display name." } } satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
