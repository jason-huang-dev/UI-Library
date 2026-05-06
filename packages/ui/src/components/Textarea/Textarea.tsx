import { forwardRef } from "react";
import { TextField } from "../TextField";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLDivElement, TextareaProps>(
  function Textarea(
    {
      minRows = 4,
      ...props
    },
    ref
  ) {
    return (
      <TextField
        ref={ref}
        minRows={minRows}
        multiline
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
