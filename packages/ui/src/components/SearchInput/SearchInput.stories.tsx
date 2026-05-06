import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SearchInput } from "./SearchInput";

const meta = {
  title: "Forms/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Search SKUs, orders, or bins"
  }
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState("BIN-A12");

    return (
      <SearchInput
        {...args}
        onChange={(event) => setValue(event.target.value)}
        onClear={() => setValue("")}
        value={value}
      />
    );
  }
};
