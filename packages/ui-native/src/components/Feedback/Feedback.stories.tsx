import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Button } from "../Components/Button";
import { Alert } from "./Alert";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";
import { LoadingSpinner } from "./LoadingSpinner";
import { ProgressBar } from "./ProgressBar";
import { Skeleton } from "./Skeleton";
import { Toast } from "./Toast";

const meta = {
  title: "Feedback/Overview",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <View style={{ gap: 16, maxWidth: 420 }}>
      <Alert severity="success" title="Saved">Pick list saved.</Alert>
      <Toast severity="info">Inventory sync is running.</Toast>
      <LoadingSpinner />
      <ProgressBar value={64} />
      <Skeleton height={36} />
      <EmptyState
        action={<Button label="Add product" />}
        description="Try adjusting your filters or adding a new product."
        title="No inventory found"
      />
      <ErrorState />
    </View>
  )
};
