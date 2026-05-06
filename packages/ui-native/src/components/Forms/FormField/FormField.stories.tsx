import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "../TextField";
import { FormField } from "./FormField";

const meta = { title: "Forms/FormField", component: FormField, tags: ["autodocs"], args: { label: "Warehouse", helperText: "Use the public display name." } } satisfies Meta<typeof FormField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: (args) => <FormField {...args}><TextField placeholder="North dock" /></FormField> };
export const Error: Story = { render: () => <FormField error="Warehouse is required." label="Warehouse"><TextField error placeholder="North dock" /></FormField> };
