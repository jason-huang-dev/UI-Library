import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../Foundation/Text";
import { Drawer } from "./Drawer";

const meta = { title: "Overlay/Drawer", component: Drawer, tags: ["autodocs"], args: { open: true, title: "Shipment filters", description: "Filter the queue." } } satisfies Meta<typeof Drawer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: (args) => <Drawer {...args}><Text>Drawer content</Text></Drawer> };
