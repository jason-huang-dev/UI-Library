import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConfirmDialog } from "./ConfirmDialog";

const meta = { title: "Overlay/ConfirmDialog", component: ConfirmDialog, tags: ["autodocs"], args: { open: true, title: "Delete product?", description: "This action cannot be undone.", onConfirm: () => undefined } } satisfies Meta<typeof ConfirmDialog>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
