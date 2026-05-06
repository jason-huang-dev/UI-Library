import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import type { ComponentType } from "react";

export const StyledButton: ComponentType<MuiButtonProps> = styled(MuiButton, {
  name: "JHButton",
  slot: "Root"
})(({ theme }) => ({
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  boxShadow: "none",

  transition: theme.transitions.create(
    ["background-color", "border-color", "box-shadow", "transform"],
    {
      duration: theme.transitions.duration.short
    }
  ),

  "&:active": {
    transform: "translateY(1px)"
  },

  "&.MuiButton-contained": {
    boxShadow: "none"
  },

  "&.MuiButton-containedPrimary:hover": {
    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.28)}`
  },

  "&.MuiButton-containedSecondary:hover": {
    boxShadow: `0 8px 24px ${alpha(theme.palette.secondary.main, 0.28)}`
  },

  "&.MuiButton-outlined": {
    borderWidth: 1.5
  },

  "&.MuiButton-outlined:hover": {
    borderWidth: 1.5
  },

  "&.Mui-disabled": {
    boxShadow: "none",
    transform: "none"
  }
}));
