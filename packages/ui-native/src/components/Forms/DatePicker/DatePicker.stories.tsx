import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { DatePicker, DateRangePicker } from "./DatePicker";

const meta = { title: "Forms/DatePicker", component: DatePicker, tags: ["autodocs"], args: { value: "2026-05-06" } } satisfies Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const DateRange: Story = { render: () => <View style={{ gap: 8, width: 280 }}><DateRangePicker value={{ start: "2026-05-06", end: "2026-05-13" }} /></View> };
