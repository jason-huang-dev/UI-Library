import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Create shipment",
    variant: "primary"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"]
    },
    disabled: {
      control: "boolean"
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 12, width: 240 }}>
      <Button label="Primary action" />
      <Button label="Secondary action" variant="secondary" />
      <Button disabled label="Disabled action" />
    </View>
  )
};
