# Contributing to Jason UI Framework

Thank you for your interest in contributing! This project is a Yarn + Turborepo monorepo for building a reusable React UI framework, a display/docs site, and Storybook-powered isolated component previews.

The goal of this repo is to keep UI components reusable, tested, documented, and safe to consume from real applications.

## Project Structure

```txt
jason-ui-framework/
  apps/
    docs/                  # Display site / documentation site
    storybook/             # Storybook workspace for isolated component rendering

  packages/
    ui/                    # Main React component library
    tokens/                # Design tokens: colors, spacing, typography, radii, shadows
    themes/                # Theme objects, including MUI theme configuration
    icons/                 # Shared icon package
    utils/                 # Shared framework utilities

  configs/
    eslint-config/         # Shared ESLint config
    tsconfig/              # Shared TypeScript configs

  .github/
    workflows/             # CI workflows

  package.json
  yarn.lock
  turbo.json
  tsconfig.base.json
```

## Development Setup

```bash
git clone https://github.com/yourusername/jason-ui-framework.git
cd jason-ui-framework

corepack enable
yarn install
```

This project uses Yarn workspaces and Turborepo.

Useful commands:

```bash
# Start all dev processes through Turbo
yarn dev

# Build every package and app
yarn build

# Run tests across the workspace
yarn test

# Run TypeScript checks
yarn typecheck

# Run lint checks
yarn lint

# Start Storybook
yarn storybook

# Start the display/docs site
yarn docs
```

## Workspace Responsibilities

### `packages/ui`

The main component library.

Components should live in:

```txt
packages/ui/src/components/ComponentName/
  ComponentName.tsx
  ComponentName.types.ts
  ComponentName.test.tsx
  ComponentName.stories.tsx
  index.ts
```

Example:

```txt
packages/ui/src/components/Button/
  Button.tsx
  Button.types.ts
  Button.test.tsx
  Button.stories.tsx
  index.ts
```

Every public component must be exported from:

```txt
packages/ui/src/index.ts
```

### `packages/tokens`

Stores design primitives such as:

```txt
colors
spacing
radii
typography
shadows
zIndex
breakpoints
```

Do not hardcode repeated design values directly in components when they belong in tokens.

### `packages/themes`

Stores theme objects, especially MUI theme configuration.

Use this package for:

```txt
light theme
dark theme
MUI palette mapping
component-level MUI overrides
typography scale
density settings
```

### `apps/storybook`

Storybook is the isolated component workshop.

Use Storybook for:

```txt
component variants
edge cases
loading states
empty states
disabled states
error states
accessibility checks
interaction examples
```

### `apps/docs`

The display/docs site should consume the UI package like an external user would.

Good:

```tsx
import { Button } from "@jason-ui/ui";
```

Avoid:

```tsx
import { Button } from "../../../packages/ui/src/components/Button";
```

The docs site should prove that the package works when consumed normally.

## Component Contribution Checklist

A component is not considered complete unless it includes:

```txt
✅ Component source
✅ Typed props
✅ Public export
✅ Storybook stories
✅ Unit/component tests
✅ Accessibility consideration
✅ Basic responsive behavior if relevant
✅ Docs/example usage if public-facing
```

For example, a new `StatusChip` component should include:

```txt
StatusChip.tsx
StatusChip.types.ts
StatusChip.test.tsx
StatusChip.stories.tsx
index.ts
```

And it should be exported from:

```ts
export * from "./components/StatusChip";
```

## Component Design Guidelines

Components should be:

- reusable across projects
- theme-aware
- accessible by default
- typed with TypeScript
- documented through Storybook
- tested with Vitest and React Testing Library
- free from app-specific business logic

Avoid putting WMS-specific logic directly into generic components.

Good:

```tsx
<DataTable columns={columns} rows={rows} />
```

Avoid:

```tsx
<WarehouseInventoryTable warehouseId={warehouseId} />
```

If a component is specific to a product workflow, place it in the app layer instead of the framework layer.

## Naming Conventions

Use PascalCase for components:

```txt
Button
IconButton
DataTable
FilterBar
PageHeader
StickyTableLayout
BreadcrumbRail
```

Use camelCase for utilities:

```txt
formatCurrency
mergeRefs
createColumnHelper
```

Use kebab-case for documentation files when appropriate:

```txt
sticky-table-layout.md
design-tokens.md
theme-system.md
```

## Testing

This project uses Vitest and React Testing Library for component tests.

Run all tests:

```bash
yarn test
```

Run tests for the UI package only:

```bash
yarn workspace @jason-ui/ui test
```

Every component should test user-facing behavior, not implementation details.

Good:

```tsx
expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
```

Avoid testing internal class names or private implementation details unless there is no better option.

## Storybook

Every public component should have a Storybook story.

Run Storybook:

```bash
yarn storybook
```

Build Storybook:

```bash
yarn workspace storybook build
```

Stories should include important states:

```txt
Default
Disabled
Loading
Error
Empty
Long content
Responsive behavior
```

For interactive components, add interaction tests when useful.

## Linting and Type Checking

Run lint checks:

```bash
yarn lint
```

Run TypeScript checks:

```bash
yarn typecheck
```

All TypeScript should be strict and strongly typed. Avoid `any` unless there is a clear reason and a comment explaining why.

## Building

Run the full workspace build:

```bash
yarn build
```

This should build:

```txt
packages/tokens
packages/themes
packages/icons
packages/utils
packages/ui
apps/docs
apps/storybook
```

Turbo is responsible for running builds in the correct dependency order.

## Commit Messages

This project uses Conventional Commits.

Format:

```txt
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Types

| Type | Description |
|---|---|
| `feat` | New feature or component |
| `fix` | Bug fix |
| `docs` | Documentation-only changes |
| `style` | Formatting or style-only change |
| `refactor` | Code change that does not add a feature or fix a bug |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |
| `ci` | CI/CD changes |
| `build` | Build system or package config changes |
| `revert` | Revert a previous commit |

### Recommended Scopes

Use scopes to indicate the affected area:

| Scope | Use For |
|---|---|
| `ui` | Main component library |
| `tokens` | Design tokens |
| `themes` | Theme system |
| `icons` | Icon package |
| `utils` | Shared utilities |
| `docs` | Display/docs site |
| `storybook` | Storybook setup or stories |
| `ci` | GitHub Actions or CI changes |
| `deps` | Dependency updates |
| `config` | TypeScript, ESLint, Turbo, Vite config |
| `release` | Versioning and release changes |

### Examples

```bash
feat(ui): add StatusChip component

fix(ui): correct disabled Button cursor behavior

docs: add getting started guide

test(ui): add DataTable sorting tests

ci: add Storybook build check

build(config): update Turbo outputs

feat(ui)!: rename DataTable column API
```

For breaking changes, use `!` or a `BREAKING CHANGE:` footer:

```bash
feat(ui)!: rename DataTable column API

BREAKING CHANGE: DataTable columns now use `accessorKey` instead of `field`.
```

## Pull Request Process

1. Create a feature branch from `develop` or `main`, depending on the current repo flow.
2. Make your changes using the project conventions.
3. Add or update tests.
4. Add or update Storybook stories.
5. Update docs if the public API changes.
6. Run the local checks:

```bash
yarn lint
yarn typecheck
yarn test
yarn build
yarn workspace storybook build
```

7. Open a pull request.
8. Ensure CI passes before merging.

## Pull Request Checklist

Before requesting review, confirm:

```txt
✅ Code builds locally
✅ Tests pass
✅ Typecheck passes
✅ Lint passes
✅ Storybook builds
✅ Public components have stories
✅ Public components have tests
✅ Exports are updated
✅ Docs are updated if needed
✅ No app-specific business logic leaked into generic packages
```

## Architecture Decision Records

Significant architectural decisions should be documented in:

```txt
docs/adr/
```

Create an ADR when changing major decisions such as:

```txt
package structure
theme architecture
styling strategy
component API conventions
release process
testing strategy
build tooling
```

Use this format:

```txt
docs/adr/0001-use-yarn-turbo-monorepo.md
```

## Code Style

General rules:

- TypeScript first
- React functional components
- Prefer named exports
- Avoid default exports for shared components
- Keep public APIs small and intentional
- Keep components theme-aware
- Avoid hardcoded design values when tokens exist
- Avoid app-specific business logic in `packages/ui`
- Prefer composition over large prop-heavy components

Good:

```tsx
<Card>
  <CardHeader title="Inventory" />
  <CardContent>{children}</CardContent>
</Card>
```

Avoid:

```tsx
<Card inventoryPageMode warehouseClientId={clientId} specialWmsBehavior />
```

## Accessibility

Components should follow basic accessibility expectations:

```txt
buttons use button semantics
inputs have labels
dialogs trap focus
menus are keyboard navigable
icons have accessible labels when meaningful
decorative icons are hidden from screen readers
color is not the only way to communicate state
```

When adding a component story, include states that make accessibility issues easy to catch.

## Versioning

This project should follow Semantic Versioning once packages are published.

```txt
MAJOR: breaking changes
MINOR: new backwards-compatible features
PATCH: backwards-compatible bug fixes
```

Examples:

```txt
0.1.0 -> 0.2.0 for a new component
0.1.0 -> 0.1.1 for a bug fix
0.1.0 -> 1.0.0 for the first stable release
```

## Release Process

When package publishing is enabled, this project should use Changesets.

Typical release flow:

```bash
# Add a changeset for user-facing package changes
yarn changeset

# Version packages
yarn changeset version

# Build before publishing
yarn build

# Publish packages
yarn changeset publish
```

Do not manually edit generated changelog sections unless the release process requires it.

## Changelog

Package changelogs should be generated from Changesets once release automation is configured.

For now, document major user-facing changes in pull requests.

## Dependency Guidelines

When adding dependencies, consider:

```txt
Is this needed in the library package?
Should it be a dependency, devDependency, or peerDependency?
Will this increase consumer bundle size?
Can this be handled with existing tools?
Does this belong in the app instead of the framework?
```

For `packages/ui`, React, React DOM, MUI, and Emotion should usually be peer dependencies.

## Questions

Open an issue or discussion for questions, proposals, or architectural changes.