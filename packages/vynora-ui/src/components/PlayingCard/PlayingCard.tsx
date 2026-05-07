import { Text, View } from "react-native";
import { FoilOverlay } from "../../assets/cards/effects/FoilOverlay";
import { CardFrame } from "../../assets/cards/frames/CardFrame";
import { SuitIcon } from "../../assets/cards/suits/SuitIcon";
import { cardTheme } from "../../theme";
import { CardBack } from "../CardBack";
import {
  getCardContainerStyle,
  getCardDimensions,
  getCardRadius,
  getCenterIconSize,
  getCornerIconSize,
  getCornerTextStyle,
  getSuitColor,
  playingCardStyles
} from "./PlayingCard.styles";
import type { PlayingCardProps } from "./PlayingCard.types";

export function PlayingCard({
  disabled = false,
  faceDown = false,
  foil = false,
  frame = "default",
  glow = false,
  invalid = false,
  mode = "full",
  playable = false,
  rank = "A",
  selected = false,
  style,
  suit = "spades",
  ...props
}: PlayingCardProps) {
  if (faceDown || mode === "faceDown") {
    return (
      <CardBack
        disabled={disabled}
        glow={glow}
        mode={mode === "faceDown" ? "full" : mode}
        selected={selected}
        style={style}
        variant={frame === "legendary" ? "premium" : "classic"}
        {...props}
      />
    );
  }

  const color = getSuitColor(suit);
  const dimensions = getCardDimensions(mode);
  const radius = getCardRadius(mode);
  const showCorners = mode !== "mini" && mode !== "opponent";
  const centerIconSize = getCenterIconSize(mode);
  const cornerIconSize = getCornerIconSize(mode);
  const cornerTextStyle = getCornerTextStyle(mode);

  return (
    <View
      accessibilityLabel={`${rank} of ${suit}`}
      style={[
        playingCardStyles.card,
        getCardContainerStyle(mode),
        mode === "mini" && playingCardStyles.mini,
        playable && playingCardStyles.playable,
        selected && playingCardStyles.selected,
        invalid && playingCardStyles.invalid,
        glow && playingCardStyles.glow,
        disabled && playingCardStyles.disabled,
        style
      ]}
      {...props}
    >
      <CardFrame
        frame={frame}
        height={dimensions.height}
        radius={radius}
        width={dimensions.width}
      />
      <FoilOverlay
        height={dimensions.height}
        radius={radius}
        visible={foil}
        width={dimensions.width}
      />

      {showCorners ? (
        <View style={playingCardStyles.corner}>
          <Text style={[playingCardStyles.cornerText, cornerTextStyle, { color }]}>
            {rank}
          </Text>
          <SuitIcon color={color} size={cornerIconSize} suit={suit} />
        </View>
      ) : null}

      <View
        style={[
          playingCardStyles.suitCenter,
          mode === "compact" && playingCardStyles.compactCenter
        ]}
      >
        {mode === "mini" || mode === "opponent" ? (
          <Text style={[playingCardStyles.cornerText, cornerTextStyle, { color }]}>
            {rank}
          </Text>
        ) : null}
        <SuitIcon
          color={color}
          size={
            frame === "legendary"
              ? Math.round(centerIconSize * 1.08)
              : centerIconSize
          }
          suit={suit}
        />
      </View>

      {showCorners ? (
        <View style={[playingCardStyles.corner, playingCardStyles.cornerBottom]}>
          <Text style={[playingCardStyles.cornerText, cornerTextStyle, { color }]}>
            {rank}
          </Text>
          <SuitIcon color={color} size={cornerIconSize} suit={suit} />
        </View>
      ) : null}
    </View>
  );
}
