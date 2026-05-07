import Svg, { Circle, Path, Rect } from "react-native-svg";
import type { CardSuit } from "../../../types/card";

export type SuitIconProps = {
  color: string;
  size?: number;
  suit: CardSuit;
};

export function SuitIcon({ color, size = 24, suit }: SuitIconProps) {
  if (suit === "hearts") {
    return (
      <Svg height={size} viewBox="0 0 64 64" width={size}>
        <Path
          d="M32 56S8 40.9 8 22.8C8 12.9 19.7 8.1 27 16.2L32 22l5-5.8c7.3-8.1 19-3.3 19 6.6C56 40.9 32 56 32 56Z"
          fill={color}
        />
      </Svg>
    );
  }

  if (suit === "diamonds") {
    return (
      <Svg height={size} viewBox="0 0 64 64" width={size}>
        <Path d="M32 5 55 32 32 59 9 32 32 5Z" fill={color} />
      </Svg>
    );
  }

  if (suit === "clubs") {
    return (
      <Svg height={size} viewBox="0 0 64 64" width={size}>
        <Circle cx="22" cy="28" fill={color} r="13" />
        <Circle cx="42" cy="28" fill={color} r="13" />
        <Circle cx="32" cy="17" fill={color} r="13" />
        <Path d="M32 31 22 56h20L32 31Z" fill={color} />
      </Svg>
    );
  }

  return (
    <Svg height={size} viewBox="0 0 64 64" width={size}>
      <Path
        d="M32 6S9 21.5 9 38.5C9 48 20.1 52.7 27.2 45.1L32 39.8l4.8 5.3C43.9 52.7 55 48 55 38.5 55 21.5 32 6 32 6Z"
        fill={color}
      />
      <Rect fill={color} height="20" rx="2" transform="rotate(45 32 43)" width="14" x="25" y="33" />
    </Svg>
  );
}
