import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { View } from "react-native";
import { Checkbox } from "./Checkbox";
import { FormField } from "./FormField";
import { NumberInput } from "./NumberInput";
import { RadioGroup } from "./RadioGroup";
import { SearchInput } from "./SearchInput";
import { Select } from "./Select";
import { Switch } from "./Switch";
import { Textarea } from "./Textarea";
import { TextField } from "./TextField";

const meta = {
  title: "Forms/Overview",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(true);
    const [status, setStatus] = useState<string | number>("receiving");
    const [strategy, setStrategy] = useState("fifo");

    return (
      <View style={{ gap: 16, maxWidth: 420 }}>
        <FormField helperText="Use the warehouse-facing display name." label="Warehouse">
          <TextField placeholder="North dock" />
        </FormField>
        <SearchInput placeholder="Search SKUs" />
        <NumberInput placeholder="Quantity" />
        <Textarea placeholder="Receiving notes" />
        <Select
          onValueChange={setStatus}
          options={[
            { label: "Receiving", value: "receiving" },
            { label: "Picking", value: "picking" },
            { label: "Packed", value: "packed" }
          ]}
          value={status}
        />
        <Checkbox checked label="Include backordered inventory" />
        <Switch onValueChange={setEnabled} value={enabled} />
        <RadioGroup
          label="Allocation strategy"
          onValueChange={setStrategy}
          options={[
            { label: "FIFO", value: "fifo" },
            { label: "LIFO", value: "lifo" }
          ]}
          value={strategy}
        />
      </View>
    );
  }
};
