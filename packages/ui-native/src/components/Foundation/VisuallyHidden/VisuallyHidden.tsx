import { Text } from "react-native";
import { visuallyHiddenStyles } from "./VisuallyHidden.styles";
import type { VisuallyHiddenProps } from "./VisuallyHidden.types";

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <Text style={visuallyHiddenStyles.hidden}>{children}</Text>;
}
