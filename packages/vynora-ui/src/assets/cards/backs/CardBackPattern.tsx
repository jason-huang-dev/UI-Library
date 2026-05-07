import Svg, { Circle, Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import type { CardBackVariant } from "../../../types/card";

export type CardBackPatternProps = {
  height: number;
  radius: number;
  variant?: CardBackVariant;
  width: number;
};

const palette = {
  classic: {
    background: "#273A68",
    accent: "#D6B05E",
    line: "rgba(255, 255, 255, 0.24)"
  },
  premium: {
    background: "#0D1B2A",
    accent: "#D6B05E",
    line: "rgba(214, 176, 94, 0.32)"
  },
  pet: {
    background: "#3B6F5A",
    accent: "#F0C66A",
    line: "rgba(255, 255, 255, 0.26)"
  }
} as const;

export function CardBackPattern({
  height,
  radius,
  variant = "classic",
  width
}: CardBackPatternProps) {
  const colors = palette[variant];

  return (
    <Svg height={height} viewBox={`0 0 ${width} ${height}`} width={width}>
      <Defs>
        <LinearGradient id="backGlow" x1="0" x2="1" y1="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.18" />
          <Stop offset="0.52" stopColor={colors.background} stopOpacity="1" />
          <Stop offset="1" stopColor="#000000" stopOpacity="0.28" />
        </LinearGradient>
      </Defs>
      <Rect fill={colors.background} height={height} rx={radius} width={width} />
      <Rect fill="url(#backGlow)" height={height} rx={radius} width={width} />
      <Rect
        fill="transparent"
        height={height - 14}
        rx={Math.max(radius - 4, 2)}
        stroke={colors.accent}
        strokeWidth="2"
        width={width - 14}
        x="7"
        y="7"
      />
      <Path
        d={`M${width * 0.18} ${height * 0.25}C${width * 0.36} ${height * 0.12} ${width * 0.64} ${height * 0.12} ${width * 0.82} ${height * 0.25}M${width * 0.18} ${height * 0.75}C${width * 0.36} ${height * 0.88} ${width * 0.64} ${height * 0.88} ${width * 0.82} ${height * 0.75}`}
        fill="transparent"
        stroke={colors.line}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Circle cx={width / 2} cy={height / 2} fill="transparent" r={width * 0.19} stroke={colors.accent} strokeWidth="2" />
      <Path
        d={`M${width / 2} ${height * 0.36}  ${width * 0.64} ${height / 2} ${width / 2} ${height * 0.64} ${width * 0.36} ${height / 2}Z`}
        fill={variant === "pet" ? colors.accent : "transparent"}
        fillOpacity={variant === "pet" ? 0.28 : 0}
        stroke={colors.accent}
        strokeWidth="2"
      />
    </Svg>
  );
}
