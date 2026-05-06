import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";

const meta = { title: "Forms/RadioGroup", component: RadioGroup, tags: ["autodocs"], args: { label: "Allocation strategy", value: "fifo", options: [{ label: "FIFO", value: "fifo" }, { label: "LIFO", value: "lifo" }] } } satisfies Meta<typeof RadioGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
