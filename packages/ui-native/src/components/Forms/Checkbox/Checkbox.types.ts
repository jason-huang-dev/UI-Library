import type { PressableProps } from "react-native";

export type CheckboxProps = Omit<PressableProps, "children"> & {
  checked?: boolean;
  label?: string;
};
