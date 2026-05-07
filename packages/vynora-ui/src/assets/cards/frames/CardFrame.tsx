import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import { cardTheme } from "../../../theme";
import type { CardFrame as CardFrameName } from "../../../types/card";

export type CardFrameProps = {
  frame?: CardFrameName;
  height: number;
  radius: number;
  width: number;
};

export function CardFrame({
  frame = "default",
  height,
  radius,
  width
}: CardFrameProps) {
  const stroke = cardTheme.frameColor[frame];
  const strokeWidth = frame === "default" ? 1 : 2.5;

  return (
    <Svg
      height={height}
      pointerEvents="none"
      style={{ left: 0, position: "absolute", top: 0 }}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <Defs>
        <LinearGradient id="legendaryFrame" x1="0" x2="1" y1="0" y2="1">
          <Stop offset="0" stopColor="#FFF0B8" />
          <Stop offset="0.45" stopColor="#D6B05E" />
          <Stop offset="1" stopColor="#8B5E16" />
        </LinearGradient>
      </Defs>
      <Rect
        fill="transparent"
        height={height - strokeWidth}
        rx={radius}
        stroke={frame === "legendary" ? "url(#legendaryFrame)" : stroke}
        strokeWidth={strokeWidth}
        width={width - strokeWidth}
        x={strokeWidth / 2}
        y={strokeWidth / 2}
      />
      {frame !== "default" ? (
        <Path
          d={`M${width * 0.18} ${height * 0.12}H${width * 0.82}M${width * 0.18} ${height * 0.88}H${width * 0.82}`}
          stroke={frame === "legendary" ? "#FFF0B8" : stroke}
          strokeLinecap="round"
          strokeWidth={1.4}
        />
      ) : null}
    </Svg>
  );
}
