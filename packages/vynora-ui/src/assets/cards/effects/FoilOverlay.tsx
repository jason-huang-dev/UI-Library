import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

export type FoilOverlayProps = {
  height: number;
  radius: number;
  visible?: boolean;
  width: number;
};

export function FoilOverlay({
  height,
  radius,
  visible = false,
  width
}: FoilOverlayProps) {
  if (!visible) {
    return null;
  }

  return (
    <Svg
      height={height}
      pointerEvents="none"
      style={{ left: 0, opacity: 0.34, position: "absolute", top: 0 }}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <Defs>
        <LinearGradient id="foilOverlay" x1="0" x2="1" y1="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <Stop offset="0.45" stopColor="#B8F7FF" stopOpacity="0.7" />
          <Stop offset="0.7" stopColor="#FFD36B" stopOpacity="0.44" />
          <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <Rect fill="url(#foilOverlay)" height={height} rx={radius} width={width} />
    </Svg>
  );
}
