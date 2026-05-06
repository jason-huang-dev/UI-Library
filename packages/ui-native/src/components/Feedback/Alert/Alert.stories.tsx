import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = { title: "Feedback/Alert", component: Alert, tags: ["autodocs"], args: { children: "Inventory sync completed.", severity: "info" } } satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Success: Story = { args: { severity: "success", title: "Saved" } };
