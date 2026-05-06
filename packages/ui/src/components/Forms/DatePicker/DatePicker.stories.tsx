import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DatePicker, DateRangePicker } from "./DatePicker";

const meta = {
  title: "Forms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    label: "Expected ship date",
    value: "2026-05-06"
  }
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DateRange: Story = {
  render: () => {
    const [value, setValue] = useState({
      end: "2026-05-13",
      start: "2026-05-06"
    });

    return (
      <DateRangePicker
        endLabel="End"
        onChange={setValue}
        startLabel="Start"
        value={value}
      />
    );
  }
};
