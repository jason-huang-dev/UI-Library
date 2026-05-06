import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("exports a React Native component", () => {
    expect(Button).toBeTypeOf("function");
  });
});
