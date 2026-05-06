import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Text } from "../Text";
import { Divider } from "./Divider";

const meta = { title: "Foundation/Divider", component: Divider, tags: ["autodocs"] } satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <View style={{ gap: 12, width: 320 }}><Text>Shipment details</Text><Divider /><Text muted>Carrier and dock metadata.</Text></View> };
