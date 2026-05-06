import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta = { title: "Forms/Select", component: Select, tags: ["autodocs"], args: { value: "receiving", options: [{ label: "Receiving", value: "receiving" }, { label: "Picking", value: "picking" }] } } satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
