# ADR-0004: React Native Compatibility

## Status

Accepted

## Context

The web UI package is built on MUI and browser DOM assumptions. React Native uses different primitives, styling, accessibility props, and runtime constraints. Trying to make one component package target both MUI web and React Native would couple unrelated implementation details and increase the risk of regressions in both platforms.

The project also needs a way to preview native components in a browser without making the main web app depend on React Native.

## Decision

Add a separate native compatibility track:

- `packages/ui` remains the web/MUI package.
- `packages/ui-native` owns React Native components.
- `apps/native-web` renders `@jason-ui/ui-native` through React Native Web.
- `apps/mobile` runs `@jason-ui/ui-native` on device through Expo.
- `apps/web` can still use `@jason-ui/ui` if/when a normal web app is added.

Both `packages/ui` and `packages/ui-native` consume `@jason-ui/tokens`. They do not import from each other.

`apps/mobile` is intentionally excluded from the root pnpm workspace. It has its own nested `pnpm-workspace.yaml` for EAS/mobile installs so Vercel and web CI do not install Expo or EAS dependencies.

## Consequences

### Positive

- Web and native components can evolve around the correct platform primitives.
- Shared tokens keep visual decisions aligned across platforms.
- React Native Web gives a browser preview without converting the MUI package.
- Expo/EAS dependencies are isolated from Vercel and normal web builds.

### Negative

- Some components will need parallel implementations in `ui` and `ui-native`.
- Mobile setup has a separate install/build path.

### Neutral

- The native package starts with a small foundation and can grow by group as native needs become real.

## References

- `packages/ui-native`
- `apps/native-web`
- `apps/mobile`
