import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = { title: "Forms/Textarea", component: Textarea, tags: ["autodocs"], args: { placeholder: "Receiving notes" } } satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
