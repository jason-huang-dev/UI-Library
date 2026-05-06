import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "vercel-output");
const storybookOutput = resolve(root, "apps/storybook/storybook-static");
const nativeWebOutput = resolve(root, "apps/native-web/dist");

if (!existsSync(storybookOutput)) {
  throw new Error(`Storybook output not found: ${storybookOutput}`);
}

if (!existsSync(nativeWebOutput)) {
  throw new Error(`Native web output not found: ${nativeWebOutput}`);
}

rmSync(output, { force: true, recursive: true });
mkdirSync(resolve(output, "native-web"), { recursive: true });

cpSync(storybookOutput, output, { recursive: true });
cpSync(nativeWebOutput, resolve(output, "native-web"), { recursive: true });
