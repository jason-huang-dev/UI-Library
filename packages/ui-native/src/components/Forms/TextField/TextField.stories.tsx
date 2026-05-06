import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "./TextField";

const meta = { title: "Forms/TextField", component: TextField, tags: ["autodocs"], args: { placeholder: "Warehouse name" } } satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Error: Story = { args: { error: true, placeholder: "Required field" } };
