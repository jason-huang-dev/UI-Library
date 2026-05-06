import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../Components/Button";
import { EmptyState } from "./EmptyState";

const meta = { title: "Feedback/EmptyState", component: EmptyState, tags: ["autodocs"], args: { title: "No inventory found", description: "Try adjusting your filters." } } satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithAction: Story = { args: { action: <Button label="Add product" /> } };
