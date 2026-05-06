import { Switch as RNSwitch, type SwitchProps as RNSwitchProps } from "react-native";
import { nativeThemes } from "../../../theme";

export type SwitchProps = RNSwitchProps;

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
