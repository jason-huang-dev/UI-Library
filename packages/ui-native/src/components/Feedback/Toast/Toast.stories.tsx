import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";

const meta = { title: "Feedback/Toast", component: Toast, tags: ["autodocs"], args: { children: "Pick list saved.", severity: "success" } } satisfies Meta<typeof Toast>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
