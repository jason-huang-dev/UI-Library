import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "./SearchInput";

const meta = { title: "Forms/SearchInput", component: SearchInput, tags: ["autodocs"], args: { placeholder: "Search SKUs" } } satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
