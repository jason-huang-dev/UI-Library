import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";

const PackagePath = (
  <path d="M20 7.5 12 3 4 7.5v9L12 21l8-4.5v-9Zm-8 1.75L7.1 6.5 12 3.75l4.9 2.75L12 9.25Zm1 9.15v-7.42l5-2.82v7.44l-5 2.8Zm-2 0-5-2.8V8.16l5 2.82v7.42Z" />
);

const meta = {
  title: "Foundation/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    children: PackagePath,
    color: "primary",
    fontSize: "medium",
    title: "Package"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "success", "error", "warning", "info"]
    },
    fontSize: {
      control: "select",
      options: ["inherit", "small", "medium", "large"]
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
      <Icon fontSize="small" title="Small package">{PackagePath}</Icon>
      <Icon fontSize="medium" title="Medium package">{PackagePath}</Icon>
      <Icon fontSize="large" title="Large package">{PackagePath}</Icon>
    </div>
  )
};
