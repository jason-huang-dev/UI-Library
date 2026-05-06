import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "./NumberInput";

const meta = { title: "Forms/NumberInput", component: NumberInput, tags: ["autodocs"], args: { placeholder: "Quantity" } } satisfies Meta<typeof NumberInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
