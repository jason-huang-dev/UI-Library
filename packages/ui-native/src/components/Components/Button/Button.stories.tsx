import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Button } from "./Button";
import type { ButtonProps } from "./Button.types";

const rowStyle = {
  alignItems: "center" as const,
  flexDirection: "row" as const,
  flexWrap: "wrap" as const,
  gap: 12
};

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button",
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
    customColor: "",
    customHoverColor: "",
    customTextColor: ""
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"]
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info"
      ]
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"]
    },
    disabled: {
      control: "boolean"
    },
    customColor: {
      control: "color",
      description:
        "Temporary one-off color preview. This does not modify the theme."
    },
    customHoverColor: {
      control: "color",
      description:
        "Temporary one-off pressed color preview. Falls back to customColor."
    },
    customTextColor: {
      control: "color",
      description:
        "Temporary one-off contained text color preview."
    },
    onPress: {
      action: "pressed"
    }
  }
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  args: {
    color: "primary",
    size: "medium",
    disabled: false
  },
  render: (args) => (
    <View style={rowStyle}>
      <Button {...args} label="Contained" variant="contained" />
      <Button {...args} label="Outlined" variant="outlined" />
      <Button {...args} label="Text" variant="text" />
    </View>
  )
};

export const Colors: Story = {
  args: {
    variant: "contained",
    size: "medium",
    disabled: false
  },
  render: (args) => (
    <View style={rowStyle}>
      <Button {...args} color="primary" label="Primary" />
      <Button {...args} color="secondary" label="Secondary" />
      <Button {...args} color="success" label="Success" />
      <Button {...args} color="error" label="Error" />
      <Button {...args} color="warning" label="Warning" />
      <Button {...args} color="info" label="Info" />
    </View>
  )
};

export const Sizes: Story = {
  args: {
    variant: "contained",
    color: "primary",
    disabled: false
  },
  render: (args) => (
    <View style={rowStyle}>
      <Button {...args} label="Small" size="small" />
      <Button {...args} label="Medium" size="medium" />
      <Button {...args} label="Large" size="large" />
    </View>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const CustomColorPreview: Story = {
  args: {
    customColor: "#5B5FC7",
    customHoverColor: "#4F46E5",
    customTextColor: "#FFFFFF"
  },
  render: (args) => (
    <View style={rowStyle}>
      <Button {...args} label="Contained" variant="contained" />
      <Button {...args} label="Outlined" variant="outlined" />
      <Button {...args} label="Text" variant="text" />
    </View>
  )
};
