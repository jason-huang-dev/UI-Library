import { ActivityIndicator } from "react-native";
import type { LoadingSpinnerProps } from "./LoadingSpinner.types";

export function LoadingSpinner(props: LoadingSpinnerProps) {
  return <ActivityIndicator {...props} />;
}
