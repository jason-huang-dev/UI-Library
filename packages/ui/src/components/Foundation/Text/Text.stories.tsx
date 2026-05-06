import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta = {
  title: "Foundation/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Inventory activity is synchronized across warehouse views.",
    muted: false,
    variant: "body"
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "h4",
        "body",
        "bodySm",
        "label",
        "caption",
        "overline",
        "code"
      ]
    },
    muted: {
      control: "boolean"
    }
  }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Scale: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      <Text variant="display">Display Heading</Text>
      <Text variant="h1">Heading One</Text>
      <Text variant="h2">Heading Two</Text>
      <Text variant="h3">Heading Three</Text>
      <Text variant="h4">Heading Four</Text>
      <Text variant="body">
        Body text is optimized for operational interfaces and repeated scanning.
      </Text>
      <Text variant="bodySm" muted>
        Smaller supporting text remains readable without competing for attention.
      </Text>
      <Text variant="label">Field Label</Text>
      <Text variant="caption" muted>
        Caption text for compact metadata.
      </Text>
      <Text variant="overline">Section Label</Text>
      <Text variant="code">SKU-4829-A</Text>
    </div>
  )
};
