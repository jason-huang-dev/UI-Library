import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { PetAvatar } from "./PetAvatar";

const meta = {
  title: "Vynora/PetAvatar",
  component: PetAvatar,
  tags: ["autodocs"],
  args: {
    name: "Vyn",
    mood: "focused",
    size: "medium"
  },
  argTypes: {
    mood: {
      control: "select",
      options: ["calm", "focused", "happy", "sleepy"]
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"]
    }
  }
} satisfies Meta<typeof PetAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Moods: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 18 }}>
      <PetAvatar mood="calm" name="Moss" />
      <PetAvatar mood="focused" name="Vyn" />
      <PetAvatar mood="happy" name="Luma" />
      <PetAvatar mood="sleepy" name="Noct" />
    </View>
  )
};
