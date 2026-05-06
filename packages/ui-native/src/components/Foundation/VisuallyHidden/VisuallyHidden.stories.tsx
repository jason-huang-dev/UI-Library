import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../Components/Button";
import { VisuallyHidden } from "./VisuallyHidden";

const meta = { title: "Foundation/VisuallyHidden", component: VisuallyHidden, tags: ["autodocs"] } satisfies Meta<typeof VisuallyHidden>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Button><VisuallyHidden>Save shipment</VisuallyHidden>Save</Button> };
