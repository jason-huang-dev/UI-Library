import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta = { title: "Feedback/Skeleton", component: Skeleton, tags: ["autodocs"], args: { height: 36, width: 280 } } satisfies Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
