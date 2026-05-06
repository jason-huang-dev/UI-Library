# Mobile App

This Expo app is intentionally separate from the default pnpm workspace so Vercel and web CI do not install Expo or EAS dependencies.

## Setup

From this directory:

```sh
pnpm install
pnpm start
```

## EAS

EAS config lives here in `apps/mobile/eas.json`.

```sh
pnpm eas:build:preview
pnpm eas:build:production
pnpm eas:submit:production
```

Before the first EAS build, replace `extra.eas.projectId` in `app.config.ts` with the project ID from `eas init`.
