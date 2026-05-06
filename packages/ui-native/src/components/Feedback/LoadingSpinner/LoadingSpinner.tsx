import { ActivityIndicator, type ActivityIndicatorProps } from "react-native";

export type LoadingSpinnerProps = ActivityIndicatorProps;

export function LoadingSpinner(props: LoadingSpinnerProps) {
  return <ActivityIndicator {...props} />;
}
