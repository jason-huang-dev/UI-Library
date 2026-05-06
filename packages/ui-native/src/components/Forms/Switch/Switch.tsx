import { Switch as RNSwitch } from "react-native";
import { nativeThemes } from "../../../theme";
import type { SwitchProps } from "./Switch.types";

export function Switch(props: SwitchProps) {
  const theme = nativeThemes.light;

  return (
    <RNSwitch
      thumbColor={props.value ? theme.color.primaryText : theme.color.surface}
      trackColor={{
        false: theme.color.border,
        true: theme.color.primary
      }}
      {...props}
    />
  );
}
