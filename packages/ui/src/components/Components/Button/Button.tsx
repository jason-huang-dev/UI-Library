import { forwardRef } from "react";
import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    return <StyledButton ref={ref} disableElevation {...props} />;
  }
);

Button.displayName = "Button";